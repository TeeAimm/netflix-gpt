import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
