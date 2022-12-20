import {createSlice} from "@reduxjs/toolkit";
import {Rootstate} from "../store";

interface FilterState {
    value: Array<string>;
}

const initialState: FilterState = {
    value: ["All"],
}

export const filterSlice = createSlice({
        name: "filter",
        initialState,
        reducers: {
            setFilter: (state, action) => {
                state.value = action.payload;
            },
            clearFilter: (state) => {
                state.value = [];
            }
        }
    }
);

export const {setFilter} = filterSlice.actions;

export const selectFilter = (state: Rootstate) => state.filter.value;

export default filterSlice.reducer;
