import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import bucket from "./bucket";
import toolkitSlice from "./toolkitSlice";

const combinedReducer = combineReducers({
    bucket: bucket,
    toolkit: toolkitSlice,
});

const makeStore = ({ isServer }) => {
    if (isServer) {
        return configureStore({
            reducer: combinedReducer,
        });
    } else {
        const persistConfig = {
            key: "nextjs",
            whitelist: ["bucket", "toolkit"],
            storage,
        };

        const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

        const store = configureStore({
            reducer: persistedReducer,
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoredActions: [
                            FLUSH,
                            REHYDRATE,
                            PAUSE,
                            PERSIST,
                            PURGE,
                            REGISTER,
                        ],
                    },
                }),
        });

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

export const wrapper = createWrapper(makeStore);
