import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoader: false,
    },
    reducers: {
        showLoader(state) {
            state.isLoader = true;
        },

        removeLoader(state) {
            state.isLoader = false;
        },
    }
})

export default authSlice.reducer;
export const { showLoader, removeLoader } = authSlice.actions;
