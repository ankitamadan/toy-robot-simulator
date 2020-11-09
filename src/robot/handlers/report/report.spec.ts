import { handleReport } from './report';
import * as util from '../../../utils';

jest.mock('../../../utils');

describe('handleReport', () => {
  test('should log robot status', () => {
    const result = handleReport({
      kind: 'OnTable',
      x: 1,
      y: 2,
      direction: 'North',
    });

    expect(result).toEqual({
      kind: 'OnTable',
      x: 1,
      y: 2,
      direction: 'North',
    });

    expect(util.showSuccess).toHaveBeenCalledTimes(1);
    expect(util.showSuccess).toHaveBeenCalledWith('Output: 1,2,NORTH');
  });
});
