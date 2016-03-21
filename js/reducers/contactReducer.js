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

const contact = (state = initialState, action) => {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case ADD_CONTACT:
      return assignToEmpty({id: action.id}, action.contact);
      break;
    default:
      return state
  }
}
const contacts = (state = initialState, action) => {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        contact(undefined, action)
      ];
    default:
      return state;
  }
}

export default contacts;
