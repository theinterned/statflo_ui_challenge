import { ADD_CONTACT } from '../constants/AppConstants';
import assignToEmpty from '../utils/assign';

const initialState = [
  {
    id            : 1,
    name          : 'Steve Pereira',
    email_address : 'steve@statflo.com',
    phone_number  : '(647) 299-8420'
  },
  {
    id            : 2,
    name          : 'Ned Schwartz',
    email_address : 'ned@theinterned.net',
    phone_number  : '(416) 624-4737'
  }
];

function contactReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case ADD_CONTACT:
      return assignToEmpty(state, {
        ownerName: action.name
      });
    default:
      return state;
  }
}

export default contactReducer;
