// la index store login abe esh bobkay 
// https://redux.js.org/tutorials/quick-start linky sitakay
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
  value: {
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
    },
    logout: (state) => {
      state.value.email = "";
      state.value.password = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
