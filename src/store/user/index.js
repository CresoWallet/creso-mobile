import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetail: '',
};

const UserDetailSlice = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    handleAddUserDetail(state, action) {
      state.userDetail = action.payload;
    },
    handleRemoveUserDetail(state) {
      state.userDetail = '';
    },
  },
});

export const {handleAddUserDetail, handleRemoveUserDetail} =
  UserDetailSlice.actions;

export const selectUserData = (state) => state.userDetailSlice.userDetail;


export default UserDetailSlice.reducer;
