import { combineReducers } from '@reduxjs/toolkit';
import isSignedInSlice from './isSignedInSlice';
import tokenSlice from './token';
import userDetailSlice from './user';
import walletSlice from './WalletAddress';
import aaWalletSlice from './AAWalletAddress';
import seedSlice from './seedPhrase';

const rootReducer = combineReducers({
  isSignedInSlice,
  tokenSlice,
  userDetailSlice,
  wallet: walletSlice,
  AAWallet: aaWalletSlice,
  seedSlice,
});

export default rootReducer;
