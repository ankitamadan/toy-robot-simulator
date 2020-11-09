import { OnTable } from 'src/robot/status';
import { showSuccess } from '../../../utils';

export const handleReport = (state: OnTable): OnTable => {
  showSuccess(`Output: ${state.x},${state.y},${state.direction.toLocaleUpperCase()}`);
  return state;
};
