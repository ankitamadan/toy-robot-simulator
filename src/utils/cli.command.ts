import { Action } from '../actions/actions';
import inquirer from 'inquirer';

export async function getPlaceCommand(): Promise<Action> {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'kind',
      default: 'PLACE 0,0,NORTH',
      message: 'Please enter the command to place the robot>>. eg.: PLACE 0,0,NORTH:',
    },
  ]);
}

export async function getMoveCommand(): Promise<Action> {
  return inquirer.prompt([
    {
      name: 'kind',
      default: 'MOVE',
      type: 'input',
      message: 'Please enter the command to move or report the robot>>. eg.: REPORT, MOVE:',
    },
  ]);
}
