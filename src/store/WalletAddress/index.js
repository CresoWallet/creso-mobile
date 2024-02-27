import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wallet: [],
};

const WalletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        handleAddWallet(state, action) {
            state.wallet.push(action.payload); 
        },
        handleEmptyWallet(state) {
            state.wallet = [];
        },
    },
});

export const { handleAddWallet, handleEmptyWallet } = WalletSlice.actions;

export const selectWallet = (state) => state.wallet.wallet;

export default WalletSlice.reducer;
