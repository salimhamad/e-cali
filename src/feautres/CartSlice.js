// redex
import { createSlice } from "@reduxjs/toolkit";

const localData = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    // return undefined;
    return err;
  }
};
console.log(localData());

const initialState = {
  // cartIteem: [],
  cartIteem: [...localData()],
  // caunt: 1,
};

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.cartIteem.push(action.payload);
      // state.carts.push(action.payload);
      // ranj state.carts = [...state.carts, action.payload];
      state.cartIteem = [...state.cartIteem, action.payload];

      // state.value.password = action.payload.password;
      localStorage.setItem("cart", JSON.stringify(state.cartIteem));
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      console.log(state.cartIteem);

      state.cartIteem.forEach((product, index) => {
        if (product.id === action.payload) {
          state.cartIteem.splice(index, 1) &&
            localStorage.setItem("cart", JSON.stringify(state.cartIteem));
        }
      });
    },

    // increment: (state) => {
    //   state.caunt = state.caunt + 1;
    //   // localStorage.setItem("cawnter", JSON.stringify(state.caunt));
    // },
    increment: (state, action) => {
      state.cartIteem.map((product, index) => {
        if (product.id === action.payload) {
          state.count = state.count + 1;
        }
      });
    },
    decrement: (state, action) => {
      const items = state.cartIteem.map((product, index) => {
        if (product.id === action.payload) {
          product.count = product.count + 1;
          return product;
        }
        return product;
      });
      state.cartIteem = items;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  CartSlice.actions;
export default CartSlice.reducer;
