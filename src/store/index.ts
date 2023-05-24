import { combineReducers, configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";

const rootReducer = combineReducers({
    project: projectSlice
});

const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
