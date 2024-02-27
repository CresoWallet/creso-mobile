import { combineReducers } from '@reduxjs/toolkit';
import isSignedInSlice from './isSignedInSlice';
import tokenSlice from './token';
import userDetailSlice from './user';
import walletSlice from "./WalletAddress"

const rootReducer = combineReducers({
  isSignedInSlice,
  tokenSlice,
  userDetailSlice,
  wallet: walletSlice
});

export default rootReducer;
