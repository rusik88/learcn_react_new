import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "./books/reducer";
import filterReducer from "./slices/FilterSlice";
import loaderReducer from "./slices/LoaderSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReducer,
        loader: loaderReducer
    }
})

export default store