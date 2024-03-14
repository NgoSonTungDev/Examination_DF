import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../clients";
import { IAuthResponse, ILogin } from "../../types/auth";

export const login = createAsyncThunk<IAuthResponse, ILogin>(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await client.login(payload);
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk<IAuthResponse, void>(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const data = await client.refreshToken();
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
