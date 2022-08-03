import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:4200';

// add user data
export const crateUser = createAsyncThunk("post/createUser", async({user}) => {
    return axios.post(`${baseUrl}/auth/user`, user)
})

// get user data
export const getData = createAsyncThunk("get/getData", async() => {
    return axios.get(`${baseUrl}/auth/users`)
})

// const initialState = [];

const userSlice = createSlice({
    name : 'post',
    initialState : {
        post : [],
        loading : false,
        error : null
    },
    extraReducers :{
        [crateUser.pending] : (state, action) => {
            state.loading = true
        },
        [crateUser.fulfilled] : (state , action) =>{
            state.loading = false;
            state.post = [action.payload]
        },
        [crateUser.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
       
    }
})

// export const { addUsers,editUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
