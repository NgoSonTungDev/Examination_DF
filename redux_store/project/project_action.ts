import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../clients";
import { IAuthResponse, ILogin } from "../../types/auth";
import { IProjectResponse } from "@/types/project";

export const getProjects = createAsyncThunk<IProjectResponse, void>(
  "project/getProjects",
  async (_, { rejectWithValue }) => {
    try {
      const data = await client.getProjects();
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
