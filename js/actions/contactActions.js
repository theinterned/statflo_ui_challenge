import { ADD_CONTACT } from '../constants/AppConstants';

let nextContactID = 3; // see contactReducer.js for ids 1 and 2

export function addContact(contact, callback) {
  const nextID = nextContactID++;
  if (callback) {
    callback(nextID, contact);
  }
  return {
    type: ADD_CONTACT,
    id: nextID,
    contact
  };
}
