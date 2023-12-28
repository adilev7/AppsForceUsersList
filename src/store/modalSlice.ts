import { /* PayloadAction,  */ createSlice } from "@reduxjs/toolkit";
// import { User } from "../types";

type InitialState = {
  // user: User;
  isOpen: boolean;
  // isLoading: boolean;
};

const initialState: InitialState = {
  // user: {
  //   id: null,
  //   title: null,
  //   firstName: null,
  //   lastName: null,
  //   fullName: null,
  //   picture: null,
  //   email: null,
  //   country: null,
  //   city: null,
  //   street: null,
  //   address: null,
  // },
  isOpen: false,
  // isLoading: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state /* , action: PayloadAction<User> */) => {
      state.isOpen = true;
      // state.user = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
