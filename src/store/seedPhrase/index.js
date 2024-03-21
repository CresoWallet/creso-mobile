import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  encryptedSeedPhrase: '',
  walletPassword: '',
};

const SeedSlice = createSlice({
  name: 'encryptedSeedPhrase',
  initialState,
  reducers: {
    handleAddSeedPhrase(state, action) {
      state.encryptedSeedPhrase = action.payload;
    },
    handleRemoveSeedPhrase(state) {
      state.encryptedSeedPhrase = '';
    },
    handleAddWalletPassword(state, action) {
      state.walletPassword = action.payload;
    },
    handleRemoveWalletPassword(state) {
      state.walletPassword = '';
    },
  },
});

export const {
  handleAddSeedPhrase,
  handleRemoveSeedPhrase,
  handleAddWalletPassword,
  handleRemoveWalletPassword,
} = SeedSlice.actions;

export const selectEncryptedSeedPhrase = (state) =>
  state.seedSlice.encryptedSeedPhrase;

export const selectWalletPassword = (state) => state.seedSlice.walletPassword;

export default SeedSlice.reducer;
