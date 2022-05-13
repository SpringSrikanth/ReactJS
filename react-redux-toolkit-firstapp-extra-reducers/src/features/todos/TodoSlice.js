import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfTodos:15
}

export const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        removeTodo: (state)=> {
            state.numberOfTodos = state.numberOfTodos-1;
        },
        addTodos: (state,action)=> {
            state.numberOfTodos = state.numberOfTodos + action.payload;
        },
        publishedTodo: (state,action) =>{
            state.numberOfTodos = state.numberOfTodos + action.payload;
        }
    }
})

export const { removeTodo, addTodos, publishedTodo} = TodoSlice.actions;
export default TodoSlice.reducer;