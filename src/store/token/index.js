import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const TokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    handleAddToken(state, action) {
      state.token = action.payload;
    },
    handleRemoveToken(state) {
      state.token = '';
    },
  },
});

export const {handleAddToken, handleRemoveToken} = TokenSlice.actions;

export const selectAuthToken = (state) => state.tokenSlice.token;

export default TokenSlice.reducer;
