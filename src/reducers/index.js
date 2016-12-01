import { combineReducers } from 'redux';
import LibraryReducers from './LibraryReducers';

export default  combineReducers ({
  libraries: LibraryReducers
});

// console.log(store.getState());
