import { BUY_BOOK } from "./BookActionTypes";

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
        default: return state;
    }
}

export default BookReducer;