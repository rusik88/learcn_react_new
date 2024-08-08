import {createSlice} from "@reduxjs/toolkit";
import {fetchBook} from "./requests";

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
            const prom = new Promise((reject, resolve) => {
                setTimeout(() => {
                    console.log("Test test test")
                    reject()
                }, 2000)
            })

            prom.then(() => console.log(555))

            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})

export const {setTitleFilter, setAuthorFilter, setFavouriteFilter, resetFilter} = filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectFavouriteFilter = (state) => state.filter.favourite

export default filterSlice.reducer