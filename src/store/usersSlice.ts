import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchedAPIUser, User } from "../types";
import { generateUniqueId } from "../utils";

type InitialState = {
  users: User[];
  isLoading: boolean;
  error: string | null | undefined;
};

const initialState: InitialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("content/fetchContent", async () => {
  const res = await axios("https://randomuser.me/api/?results=10");
  const data = await res.data;
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const pl = action.payload;
      const id = generateUniqueId();
      const fullName = `${pl.title} ${pl.firstName} ${pl.lastName}`;
      const address = `${pl.street} ${pl.city} ${pl.country}`;
      state.users.push({ ...pl, id, fullName, address });
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const pl = action.payload;
      const fullName = `${pl.title} ${pl.firstName} ${pl.lastName}`;
      const address = `${pl.street} ${pl.city} ${pl.country}`;
      const updatedUser = { ...pl, fullName, address };
      state.users = state.users.map((user: User) =>
        user.id === action.payload.id ? updatedUser : user
      );
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload?.results.map(
          (user: FetchedAPIUser): User => {
            const { login, name, picture, email, location } = user;
            const { title, first: firstName, last: lastName } = name;
            const { country, city, street: str } = location;
            const street = `${str.number} ${str.name}`;
            return {
              id: login.uuid,
              title,
              firstName,
              lastName,
              fullName: `${title} ${firstName} ${lastName}`,
              picture: picture.medium,
              email,
              country,
              city,
              street,
              address: `${street},  ${city},  ${country}`,
            };
          }
        );
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
