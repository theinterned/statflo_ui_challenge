import expect from 'expect';
import { addContact } from '../js/actions/contactActions';
import { ADD_CONTACT } from '../js/constants/AppConstants';
import { changeOwnerName, changeProjectName } from '../js/actions/AppActions';
import { CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME } from '../js/constants/AppConstants';

describe('ContactActions', () => {
  describe('addContact', () => {
    it('should add the passed contact', () =>{
      const contact = {
        name          : 'Test Contact',
        email_address : 'test@statflo.com',
        phone_number  : '(416) 123-4567'
      }
      const expectedResult = {
        type: ADD_CONTACT,
        id: 3,
        contact
      }
      let result = addContact(contact);
      expect(result).toEqual(expectedResult);
      expect(result.id).toEqual(3);
    });
  });
});

// Test actions from AppActions.js
describe('AppActions', () => {
  // Test changeOwnerName action
  describe('changeOwnerName', () => {
    it('should change the owner name', () => {
      const name = 'samsmith';
      const expectedResult = {
        type: CHANGE_OWNER_NAME,
        name
      };

      expect(changeOwnerName(name)).toEqual(expectedResult);
    });
  });

  // Test changeProjectName action
  describe('changeProjectName', () => {
    it('should change the project name', () => {
      const name = 'Webapplication Boilerplate';
      const expectedResult = {
        type: CHANGE_PROJECT_NAME,
        name
      };

      expect(changeProjectName(name)).toEqual(expectedResult);
    });
  });
});
