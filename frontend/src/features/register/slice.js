import { createSlice } from "@reduxjs/toolkit";

const registro = createSlice({
  name: "register",
  initialState: {
    first: "",
    last: "",
    email: "test@mail.com",
    password: "secret",
    repeat_password: "",
  },
  reducers: {
    updateVal(state, { payload: { key, val } }) {
      state[key] = val;
    },
  },
});

export const { updateVal } = registro.actions;

export default registro.reducer;
