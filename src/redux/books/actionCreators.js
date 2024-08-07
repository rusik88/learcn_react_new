import * as a from './actionTypes'

export const addBook = (newBook) => {
    return {
        type: a.ADD_TYPE,
        payload: newBook
    }
}

export const delBook = (id) => {
    return {
        type: a.DEL_TYPE,
        payload: id
    }
}

export const randomBook = () => {
    return {
        type: a.RANDOM_TYPE,
        payload: {}
    }
}

export const favouriteBook = (id) => {
    return {
        type: a.FAVOURITE_TYPE,
        payload: id    }
}