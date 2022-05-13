import { createSlice } from "@reduxjs/toolkit";
import { publishedTodo } from "../todos/TodoSlice";

const initialState ={
    numberOfBlogs:10
}

export const blogSlice = createSlice({
    name:"blogs",
    initialState,
    reducers:{
        removeBlog:(state)=>{
            state.numberOfBlogs = state.numberOfBlogs -1;
        },
        addBlogs:(state,action)=>{
            state.numberOfBlogs = state.numberOfBlogs + action.payload
        }
    },
    extraReducers: buider =>{
        buider.addCase(publishedTodo,(state,action)=>{
            state.numberOfBlogs = state.numberOfBlogs +action.payload
        })
    }
})


export const { removeBlog,addBlogs }= blogSlice.actions;
export default blogSlice.reducer;