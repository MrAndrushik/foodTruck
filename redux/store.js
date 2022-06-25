import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bucket from "./bucket";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    bucket: bucket,
});

export const store = configureStore({
    reducer: rootReducer,
});
