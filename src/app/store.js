// redux slice "login , register"
// npm install @reduxjs/toolkit react-redux

import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../feautres/LoginSlice";
import RegisterSlice from "../feautres/RegisterSlice";
import CartSlice from "../feautres/CartSlice";

export default configureStore({
  reducer: {
    //   store krdny login slice
    loginSlice: LoginSlice,
    registerSlice: RegisterSlice,
    cartSlice: CartSlice,
  },
});
