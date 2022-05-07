import { ADD_BOOK, BUY_BOOK, BUY_BOOK_BY_QUANTITY } from "./BookActionTypes";

const initialState = {
    numberOfBooks:15,
    authors:10
}

const BookReducer = (state=initialState,action) =>{
    switch (action.type) {
        case BUY_BOOK: return{
            ...state,
            numberOfBooks: state.numberOfBooks -1
        }
        case BUY_BOOK_BY_QUANTITY: return{
            ...state,
            numberOfBooks: state.numberOfBooks - Number(action.payload)
        }
        case ADD_BOOK: return{
            ...state,
            numberOfBooks: state.numberOfBooks + Number(action.payload)
        }
        default: return state;
    }
}

export default BookReducer;