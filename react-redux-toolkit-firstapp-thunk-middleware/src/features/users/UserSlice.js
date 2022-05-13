import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:true,
    users:[],
    error:'',
    selectedUser:null,
}

export const fetchUsers = createAsyncThunk('user/fetchUsers',async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
})

export const fetchUserById = createAsyncThunk('user/fetchUserById',async (id)=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
})

export const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.error = '';
            state.loading= true;
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.error = '';
            state.loading= false;
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.error = action.error.message;
            state.loading= false;
            state.users = [] 
        })

        builder.addCase(fetchUserById.pending,(state,action)=>{
            state.error = '';
        })
        builder.addCase(fetchUserById.fulfilled,(state,action)=>{
            state.error = '';
            state.selectedUser = action.payload
        })
        builder.addCase(fetchUserById.rejected,(state,action)=>{
            state.error = action.error.message;
            state.selectedUser = null 
        })
    }
})

export default userSlice.reducer;