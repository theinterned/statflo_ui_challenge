import { ADD_CONTACT } from '../constants/AppConstants';

let nextContactID = 3; // see contactReducer.js for ids 1 and 2

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    id: nextContactID++,
    contact
  };
}
