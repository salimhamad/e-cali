// la index store login abe esh bobkay
// https://redux.js.org/tutorials/quick-start linky sitakay

import { createSlice } from "@reduxjs/toolkit";
//let storageCart = JSON.parse(localStorage.getItem("cartyregester") || "[]");
// let storeLocalg = JSON.parse(localStorage.getItem("registerLS"));

const initialState = {
  // value: storeLocalg,
  user: localStorage.getItem("localUser") || undefined,
};

const userSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("localUser", JSON.stringify(action.payload));
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
//  pewystnakat register slice habet chunka tanya user drwsakayt wa mamosta bo regster boya bakary yanawa chunka ayawe ka login k nayatawa sar regster