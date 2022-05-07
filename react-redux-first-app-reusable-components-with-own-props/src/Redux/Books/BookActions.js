import { ADD_BOOK, BUY_BOOK, BUY_BOOK_BY_QUANTITY } from "./BookActionTypes";

export const buyBook = () =>{
    return {
        type:BUY_BOOK
    }
} 

export const buyBookByQuantity = (payload) =>{
    return {
        type:BUY_BOOK_BY_QUANTITY,
        payload
    }
}

export const addBook = (payload) =>{
    return {
        type:ADD_BOOK,
        payload
    }
}