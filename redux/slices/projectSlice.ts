import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface ProjectState {
    title: string;
    tag: string;
    image: string;
    description: string;
    link: string;
    icon: string;
    color: string;
}

const initialState: ProjectState = {
    title: "",
    tag: "",
    image: "",
    description: "",
    link: "",
    icon: "",
    color: ""
}

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProject: (state, action) => {
            state.title = action.payload.title;
            state.tag = action.payload.tag;
            state.image = action.payload.image;
            state.description = action.payload.description;
            state.link = action.payload.link;
            state.icon = action.payload.icon;
            state.color = action.payload.color;
        }
    }
});

export const {setProject} = projectSlice.actions;
export const selectProject = (state: RootState) => state.project;
export default projectSlice.reducer;
