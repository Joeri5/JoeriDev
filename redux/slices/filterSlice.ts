import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface FilterState {
    value: Array<string>;
}

const initialState: FilterState = {
    value: [],
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

export const selectFilter = (state: RootState) => state.filter.value;

export default filterSlice.reducer;
