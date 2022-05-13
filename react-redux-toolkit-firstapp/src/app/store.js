import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/TodoSlice"
import blogReducer from "../features/blogs/BlogSlice"



const store = configureStore(
    {
        reducer: {
            todos: todoReducer,
            blogs: blogReducer
        }
    }
);

export default store;