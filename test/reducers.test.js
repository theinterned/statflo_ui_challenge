import expect from 'expect';
import homeReducer from '../js/reducers/homeReducer';
import contactReducer from '../js/reducers/contactReducer';
import * as constants from '../js/constants/AppConstants';


describe('contactReducer', () => {
  it('should return the default state', () => {
    expect(contactReducer(undefined, {})).toEqual([
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
    ]);
  });
  it('should add a passed contact to the list of contacts', () => {
    let contact = {
      name          : 'Test Contact',
      email_address : 'test@statflo.com',
      phone_number  : '(416) 123-4567'
    };
    let action = {
      type: constants.ADD_CONTACT,
      id: 3,
      contact
    };
    expect(contactReducer(undefined, {}).length).toEqual(2);
    let nextState = contactReducer(undefined, action);
    expect(nextState.length).toEqual(3);
    expect(nextState[2].id).toEqual(3);
    expect(nextState[2].name).toEqual('Test Contact');
    nextState = contactReducer({}, action); // start with an emapty previous state
    expect(nextState.length).toEqual(1);
    expect(nextState[0].id).toEqual(3);
    expect(nextState[0].name).toEqual('Test Contact');
  });
});

// Test Reducer
describe('defaultReducer', () => {
  // Test that the initial state is returning correctly
  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual({
      projectName: 'React.js Boilerplate',
      ownerName: 'mxstbr'
    });
  });

  // Test that it handles changing the owner correctly
  it('should handle the CHANGE_OWNER_NAME action', () => {
    const name = 'samsmith';

    expect(
      homeReducer({}, {
        type: constants.CHANGE_OWNER_NAME,
        name
      })
    ).toEqual({
      ownerName: name
    });
  });

  // Test that it handles changing the project name correctly
  it('should handle the CHANGE_PROJECT_NAME action', () => {
    const name = 'Webapplication Boilerplate';

    expect(
      homeReducer({}, {
        type: constants.CHANGE_PROJECT_NAME,
        name
      })
    ).toEqual({
      projectName: name
    });
  });
});
