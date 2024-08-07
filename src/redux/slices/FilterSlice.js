import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    author: '',
    favourite: false
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            state.title = action.payload
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload
        },
        setFavouriteFilter: (state, action) => {
            state.favourite = action.payload
        },
        resetFilter: (state, action) => {
            return initialState
        }
    }
})

export const {setTitleFilter, setAuthorFilter, setFavouriteFilter, resetFilter} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectFavouriteFilter = (state) => state.filter.favourite

export default filterSlice.reducer