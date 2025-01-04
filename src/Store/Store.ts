import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from './LoaderSlice';
import languageReducer from './LanguageSlice';

const store = configureStore({
    reducer: {
        loader: loaderReducer,
        language: languageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;