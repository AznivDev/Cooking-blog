import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../configApp/createStore";

const selectSelf = (state: RootState) => state;

const usersSelector = createSelector(selectSelf, (state) => state.users.users);

export { usersSelector };