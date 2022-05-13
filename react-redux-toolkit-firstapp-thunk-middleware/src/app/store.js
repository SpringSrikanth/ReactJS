import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/TodoSlice";
import blogReducer from "../features/blogs/BlogSlice";
import userReducer from "../features/users/UserSlice";

const store = configureStore(
    {
        reducer: {
            todos: todoReducer,
            blogs: blogReducer,
            users: userReducer
        }
    }
);

export default store;