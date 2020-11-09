import { Table } from 'src/table/table';
import * as util from '../utils';

import { handleActions } from './robot';

jest.mock('../utils');

describe('robot', () => {
  const table = new Table(5, 5);

  beforeEach(() => {
    (util.showSuccess as jest.Mock).mockReset();
  });

  test('should handle actions and report status', () => {
    const result = handleActions(table, [
      { kind: 'Place', x: 1, y: 2, direction: 'East' },
      { kind: 'Move' },
      { kind: 'Left' },
      { kind: 'Move' },
      { kind: 'Right' },
      { kind: 'Report' },
    ]);

    expect(result).toEqual({
      kind: 'OnTable',
      x: 2,
      y: 3,
      direction: 'East',
    });

    expect(util.showSuccess).toHaveBeenCalledTimes(1);
    expect(util.showSuccess).toHaveBeenCalledWith('Output: 2,3,EAST');
  });

  test('should ignore actions, when the robot is out of the table', () => {
    const result = handleActions(table, [{ kind: 'Left' }, { kind: 'Move' }, { kind: 'Right' }, { kind: 'Report' }]);

    expect(result).toEqual({
      kind: 'OutOfTable',
    });

    expect(util.showSuccess).not.toHaveBeenCalled();
  });
});
