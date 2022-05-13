import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    numberOfBlogs:10
}

export const blogSlice = createSlice({
    name:"blogs",
    initialState,
    reducers:{
        removeBlog:(state)=>{
            state.numberOfBlogs = state.numberOfBlogs -1;
        }
    }
})


export const { removeBlog }= blogSlice.actions;
export default blogSlice.reducer;