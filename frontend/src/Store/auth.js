import { createSlice } from "@reduxjs/toolkit";

const initial = {
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role"),
  userID: localStorage.getItem("userID"),
};
localStorage.removeItem("email");
const authStore = createSlice({
  name: "loging",
  initialState: initial,
  reducers: {
    login(state, action) {
      state.role = action.payload.type;
      state.userID = action.payload.id;
      state.token = action.payload.token;

      localStorage.setItem("token", state.token);
      localStorage.setItem("role", state.type);
      localStorage.setItem("userID", state.userID);

      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("userID");
      }, 60000 * 60);
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userID");
    },
  },
});

export default authStore;

export const { login, logout } = authStore.actions;
