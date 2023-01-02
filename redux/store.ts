import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {menuSlice} from "./slices/menuSlice";
import {fileSlice} from "./slices/fileSlice";
import {filterSlice} from "./slices/filterSlice";
import {userMenuSlice} from "./slices/userMenuSlice";
import {formSlice} from "./slices/formSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        file: fileSlice.reducer,
        filter: filterSlice.reducer,
        userMenu: userMenuSlice.reducer,
        form: formSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
