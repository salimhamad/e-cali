// redux slice "login , register"
// npm install @reduxjs/toolkit react-redux

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import LoginSlice from "../feautres/LoginSlice";
import RegisterSlice from "../feautres/RegisterSlice";
import CartSlice from "../feautres/CartSlice";

import { concat } from "lodash";
import { ecommerceApi } from "../service/apisevis";

export default configureStore({
  reducer: {
    //   store krdny login slice
    loginSlice: LoginSlice,
    registerSlice: RegisterSlice,
    cartSlice: CartSlice,

    /* boaway backend rabtkat ecommerceApi layara import krawaw am dw shaay bo anwsre
    [ecommerceApi.reducerPath]:ecommerceApi.reducer,
      middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(ecommerceApi.middleware);

 */
    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ecommerceApi.middleware);
  },
  
});
