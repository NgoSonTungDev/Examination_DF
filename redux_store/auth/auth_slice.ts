import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IMovie } from "../../types/auth";
import { getMovies } from "./auth_action";

interface IAuthState {
  movies: IMovie[];
}

const initialState: IAuthState = {
  movies: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetData: (state) => {
      state.movies = initialState.movies;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getMovies.fulfilled,
      (state, action: PayloadAction<IMovie[]>) => {
        state.movies = action.payload;
      }
    );
  },
});

const { actions, reducer } = authSlice;
export const { resetData } = actions;
export default reducer;
