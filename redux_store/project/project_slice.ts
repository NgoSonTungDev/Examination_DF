import { IProject, IProjectResponse } from "@/types/project";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./project_action";

interface IProjectState {
  projectList: IProject[];
}

const initialState: IProjectState = {
  projectList: [],
};

const projectSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetData: (state) => {
      state.projectList = initialState.projectList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProjects.fulfilled,
      (state, action: PayloadAction<IProjectResponse>) => {
        state.projectList = action.payload.results;
      }
    );
  },
});

const { actions, reducer } = projectSlice;
export const { resetData } = actions;
export default reducer;
