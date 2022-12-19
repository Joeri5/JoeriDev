import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {menuSlice} from "./slices/menuSlice";
import {fileSlice} from "./slices/fileSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        file: fileSlice.reducer,
    },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
