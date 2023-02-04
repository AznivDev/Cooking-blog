import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

interface UserSliceState {
  users: User[];
}

const initalState: UserSliceState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: initalState,
  reducers: {
    removeLastUser: (state) => {
      state.users.pop();
    },
    getAllUsersAction: () => {},
    getAllUsersSucceed: (state, action) => {
      console.log(state, action, "action");
      state.users = action.payload;
    },
  },
});

export const { removeLastUser, getAllUsersAction, getAllUsersSucceed } =
  userSlice.actions;

export default userSlice;