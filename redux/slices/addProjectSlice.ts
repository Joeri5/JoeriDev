import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface addProjectState {
    value: boolean;
}

const initialState: addProjectState = {
    value: false,
}

export const addProjectSlice = createSlice({
        name: "addProject",
        initialState,
        reducers: {
            toggleAddProject: (state) => {
                state.value = !state.value;
            },
            clearAddProject: (state) => {
                state.value = false;
            }
        }
    }
);

export const {toggleAddProject, clearAddProject} = addProjectSlice.actions;

export const selectAddProject = (state: RootState) => state.addProject.value;

export default addProjectSlice.reducer;
