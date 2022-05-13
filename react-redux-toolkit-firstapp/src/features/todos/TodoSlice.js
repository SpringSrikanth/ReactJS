import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfTodos:15
}

export const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        removeTodo: (state)=> {
            state.numberOfTodos = state.numberOfTodos-1
        }
    }
})

export const {removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;