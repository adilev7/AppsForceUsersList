import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import ModalReducer from "./modalSlice";
import userFormReducer from "./userFormSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    userForm: userFormReducer,
    modal: ModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
