import { combineReducers } from '@reduxjs/toolkit';
import isSignedInSlice from './isSignedInSlice';
import tokenSlice from './token';
import userDetailSlice from './user';
import walletSlice from "./WalletAddress"
import aaWalletSlice from "./AAWalletAddress"

const rootReducer = combineReducers({
  isSignedInSlice,
  tokenSlice,
  userDetailSlice,
  wallet: walletSlice,
  AAWallet: aaWalletSlice
});

export default rootReducer;
