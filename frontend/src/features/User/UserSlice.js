import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: {
      first: "",
      last: "",
    },
    email: "",
    password: "",
    repeat_password: "",
  },
  reducers: {},
  extraReducers: {

  },
});

export const userSelector=state=>state.user;
