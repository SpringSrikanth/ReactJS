import todoReducer from "./Todos/TodoReducer";
import BookReducer from "./Books/BookReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    todos:todoReducer,
    books:BookReducer
});

export default RootReducer