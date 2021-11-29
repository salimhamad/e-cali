// la index store login abe esh bobkay
// https://redux.js.org/tutorials/quick-start linky sitakay

import { createSlice } from "@reduxjs/toolkit";
//let storageCart = JSON.parse(localStorage.getItem("cartyregester") || "[]");
// let storeLocalg = JSON.parse(localStorage.getItem("registerLS"));

const initialState = {
  // value: storeLocalg,
  value: {
    email: "",
    password: "",
    reEnterPassword: "",
  },
};

const userSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    register: (state, action) => {
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
      state.value.reEnterPassword = action.payload.reEnterPassword;
      // localStorage.setItem("registerLS", JSON.stringify(state.value));
    },
  },
});

export const { register } = userSlice.actions;
export default userSlice.reducer;

// JSON.parse(localStorage.getItem("myItem"))
// const obj = {
//   id: 1,
//   title: "Setup development environment",
//   completed: true,
// }
// localStorage.setItem("myItem", JSON.stringify(obj))

// const initialState = {
//   // value: {
//   //   email: "",
//   //   password: "",
//   //   reEnterPassword: "",
//   // },

//   // value: [...storeLocalg()],
//   // value: storeLocalg,
//      value: storeLocalg(),

// };
