import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { IAuthResponse } from "../../types/auth";
import { login } from "./auth_action";
import client from "@/clients";

interface IAuthState {
  access_token: string;
  refresh_token: string;
}

const initialState: IAuthState = {
  access_token: "",
  refresh_token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetToken: (state) => {
      state.access_token = initialState.access_token;
      state.refresh_token = initialState.refresh_token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<IAuthResponse>) => {
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;
        Cookies.set("access_token", action.payload.access_token);
        Cookies.set("refresh_token", action.payload.refresh_token);
        client.setToken(action.payload.access_token);
      }
    );
  },
});

const { actions, reducer } = authSlice;
export const { resetToken } = actions;
export default reducer;
