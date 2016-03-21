/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import homeReducer from './homeReducer';
import contacts from './contactReducer';
import { combineReducers } from 'redux';

//const rootReducer = homeReducer;
const rootReducer = combineReducers({ homeReducer, contacts })


export default rootReducer;
