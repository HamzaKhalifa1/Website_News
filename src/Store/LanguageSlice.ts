import { createSlice } from "@reduxjs/toolkit";

type LanguageState = {
    Language : string;
}
const initialState : LanguageState = {
    Language : "en"
}
const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setEN: (state) => {
            state.Language = "en";
        },
        setAR: (state) => {
            state.Language = "ar";
        },
    },
});

export const { setEN, setAR } = LanguageSlice.actions;
export default LanguageSlice.reducer;