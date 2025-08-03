import { createSlice } from "@reduxjs/toolkit";
import reducer from "../cart/cartSlice";

const loadUserFromLocalStorage = () => {
  try {
    const serializedUser = localStorage.getItem("user");
    if (serializedUser === null) return { user: null };
    return { user: JSON.parse(serializedUser) };
  } catch (error) {
    console.log("error: ", error);
    return { user: null };
  }
};

const initialState = loadUserFromLocalStorage();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
