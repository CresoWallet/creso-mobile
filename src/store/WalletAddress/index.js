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
        handleReplaceAllWallets(state, action) {
            state.wallet = action.payload
        }
    },
});

export const { handleAddWallet, handleEmptyWallet , handleReplaceAllWallets} = WalletSlice.actions;

export const selectWallet = (state) => state.wallet.wallet;

export default WalletSlice.reducer;
