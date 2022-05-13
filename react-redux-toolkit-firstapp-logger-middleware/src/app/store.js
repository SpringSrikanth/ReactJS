import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/TodoSlice"
import blogReducer from "../features/blogs/BlogSlice"
import logger from "redux-logger";

const store = configureStore(
    {
        reducer: {
            todos: todoReducer,
            blogs: blogReducer
        },
        middleware : [logger]
    }
);

export default store;