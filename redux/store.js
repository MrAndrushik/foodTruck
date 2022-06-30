import { combineReducers, configureStore } from "@reduxjs/toolkit";

import toolkitSlice from "./toolkitSlice";
import bucket from "./bucket";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    bucket: bucket,
});

const store = configureStore({
    reducer: rootReducer,
});

store.subscribe(() => {
    localStorage.setItem("store", JSON.stringify(store.getState()));
});

export default store;
