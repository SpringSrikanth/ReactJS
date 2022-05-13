import { BUY_BOOK, BUY_BOOK_BY_QUANTITY } from "./BookActionTypes";

export const buyBook = (value) =>{
    return {
        type:BUY_BOOK,
        payload:value
    }
} 

export const buyBookByQuantity = (value) =>{
    return {
        type:BUY_BOOK_BY_QUANTITY,
        payload:value
    }
}