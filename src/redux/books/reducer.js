import * as a from './actionTypes'
import data from '../../data/books.json'
import { v4 as uuidv4 } from 'uuid';
import {getRandomInt} from "../../utils/functions";

const initialState = []

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case a.ADD_TYPE:
            action.payload = {...action.payload, id: uuidv4(), favourite: false}
            return [...state, action.payload]
        case a.DEL_TYPE:
            return state.filter((item) => item.id !== action.payload)
        case a.FAVOURITE_TYPE:
           return state.map((item) => {
                if(item.id === action.payload) return {...item, favourite: !item.favourite}
                else return item
            })
        case a.RANDOM_TYPE:
            const index = getRandomInt(0, data.length)
            if(data[index] !== undefined) {
                const book = {...data[index], id: uuidv4(), favourite: false}
                return [...state, book]
            } else return state

        default:
            return state
    }
}

export default booksReducer