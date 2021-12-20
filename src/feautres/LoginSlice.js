import { createSlice } from "@reduxjs/toolkit";
// localStorage.getItem("localUser") || undefined
// JSON.parse(localStorage.getItem("localUser") || undefined) ama boya parse krawa chunka  amawe la personalinformation dataka wargrmawane
const initialState = {
  user: JSON.parse(localStorage.getItem("localUser")) || undefined,
};

const userSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("localUser", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = undefined;
      localStorage.removeItem("localUser");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
