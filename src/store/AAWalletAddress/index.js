import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    AAWallet: [],
};

const AAWalletSlice = createSlice({
    name: 'AAWallet',
    initialState,
    reducers: {
        handleAddAAWallet(state, action) {
            state.AAWallet.push(action.payload);
        },
        handleEmptyAAWallet(state) {
            state.AAWallet = [];
        },
    },
});

export const { handleAddAAWallet, handleEmptyAAWallet } = AAWalletSlice.actions;

export const selectAAWallet = (state) => state.AAWallet.AAWallet;

export default AAWalletSlice.reducer;
