import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "../redux/saga";
import userSlice from "../redux/userSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;

export type RootState = ReturnType<typeof store.getState>;