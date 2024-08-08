import {createSlice} from "@reduxjs/toolkit";
import {fetchBook, resetLoader} from "./requests";

const initialState = {
    load: false
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.load = true
        },
        clearLoader: (state, action) => {
            state.load = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.load = !state.load
        }).addCase(resetLoader.fulfilled, (state, action) => {
            state.load = !state.load
        })
    }
})

export const {setLoader, clearLoader} = loaderSlice.actions

export const selectLoader = (state) => state.loader.load

export default loaderSlice.reducer