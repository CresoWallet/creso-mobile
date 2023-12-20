import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSignIn: false,
};

const IsSignInSlice = createSlice({
  name: 'isSignIn',
  initialState,
  reducers: {
    handleTrue(state) {
      state.isSignIn = true;
    },
    handleFalse(state) {
      state.isSignIn = false;
    },
  },
});

export const {handleTrue, handleFalse} = IsSignInSlice.actions;

export default IsSignInSlice.reducer;
