import {combineReducers} from '@reduxjs/toolkit';
import isSignedInSlice from './isSignedInSlice';
import tokenSlice from './token';
import userDetailSlice from './user';

const rootReducer = combineReducers({
  isSignedInSlice,
  tokenSlice,
  userDetailSlice,
});

export default rootReducer;
