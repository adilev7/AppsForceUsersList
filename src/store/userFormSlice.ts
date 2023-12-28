import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
import { USER_EMPTY_STATE } from "../constants";

const initialState: { user: User } = { user: USER_EMPTY_STATE };

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    fillUserForm: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUserForm: (state) => {
      state.user = USER_EMPTY_STATE;
    }
  },
});

export const { fillUserForm, resetUserForm } = modalSlice.actions;

export default modalSlice.reducer;
