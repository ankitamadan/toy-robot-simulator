import { Table } from 'src/table/table';
import { handleActions } from 'src/robot/robot';
import { OnTable, OutOfTable } from 'src/robot/status';

import { parseAction } from 'src/utils/parseAction';
import { showError, showTitleAndBanner } from './utils';
import { getPlaceCommand, getMoveCommand } from './utils/cli.command';

export const isMoreCommands = (value: string): boolean => {
  return !value.toLocaleLowerCase().includes('report');
};

export const runProgram = async (): Promise<OnTable | OutOfTable> => {
  const table = new Table(5, 5);
  let addMoreCommands = true;
  const commands: string[] = [];
  try {
    const { kind } = await getPlaceCommand();

    commands.push(kind);

    while (addMoreCommands) {
      const { kind } = await getMoveCommand();
      addMoreCommands = isMoreCommands(kind);
      commands.push(kind);
    }

    const actions = commands.map(parseAction);

    return handleActions(table, actions);
  } catch (error) {
    showError(error.toString());
    return { kind: 'OutOfTable' };
  }
};

showTitleAndBanner();
runProgram();
