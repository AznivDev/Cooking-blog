import { call, put, select, takeLatest } from "redux-saga/effects";
import { getAllUsersAction, getAllUsersSucceed } from "./userSlice";
import { getAllUsers } from "../services/userService";
import { User } from "../types/user";
import adaptUsers from "./dataAdapter";

function* fetchData() {
  try {
    const users: User[] = yield call(getAllUsers);
    console.log(users, "state in sage");
    yield put(getAllUsersSucceed(adaptUsers(users)));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchDataSaga() {
  yield takeLatest(getAllUsersAction.type, fetchData);
}