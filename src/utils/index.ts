import { red, green, cyan } from 'kleur';
import * as figlet from 'figlet';

import { ConsoleMessage } from './console_message';

const newLine = '\n';

export const showTitleAndBanner = (): void => {
  console.log(cyan(figlet.textSync(ConsoleMessage.TITLE, { horizontalLayout: 'full' })));
  console.info(cyan(ConsoleMessage.BANNER));
  console.info(green(ConsoleMessage.COMMAND_INFO));
};

export const showError = (message: string | Error): void => {
  console.error(red(ConsoleMessage.ERROR) + message);
};

export const showSuccess = (message: string): void => {
  console.log(green(ConsoleMessage.SUCCESS) + message + newLine);
};
