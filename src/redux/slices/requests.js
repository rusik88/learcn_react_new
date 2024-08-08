import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchBook = createAsyncThunk(
    'books/fetchBook',
    async () => {
        let data = {}
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            data = await response.json()
        } catch(e) {
            console.log(`Error message catch ${e}`)
        }
        return data
    }
)

export const resetLoader = createAsyncThunk(
    'loader/resetLoader',
    async () => {
        return {}
    }
)