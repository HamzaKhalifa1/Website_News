import { createSlice } from "@reduxjs/toolkit";

type LoaderState = {
    isLoading : boolean;
}
const initialState : LoaderState = {
    isLoading : false 
}
const LoaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        showLoader: (state) => {
            state.isLoading = true;
        },
        hideLoader: (state) => {
            state.isLoading = false;
        },
    },
});

export const { showLoader, hideLoader } = LoaderSlice.actions;
export default LoaderSlice.reducer;