import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
