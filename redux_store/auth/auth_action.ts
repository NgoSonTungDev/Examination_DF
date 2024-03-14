import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../clients";
import { IMovie } from "../../types/auth";

export const getMovies = createAsyncThunk<IMovie[], void>(
  "auth/getMovies",
  async (_, { rejectWithValue }) => {
    try {
      const data = await client.getMovie();
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
