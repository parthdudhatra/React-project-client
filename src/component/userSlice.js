import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';
export const cratePost = createAsyncThunk("post/getPost", async({user}) => {
    return axios.post(`${baseUrl}/auth/user`, user)
})
// const initialState = [];

const userSlice = createSlice({
    // name : "users",
    // initialState,
    // reducers : {
    //     addUsers : (state, action) =>{
    //         state.push(action.payload)
    //         console.log(action);
    //     },
    //     editUser: (state, action) => {
    //         const { id, name, email , contact} = action.payload;
    //         console.log("RRRRRRR",state)
    //         const existingUser = state.find(user => user.id === id);
    //         console.log("///////////////////////////",existingUser)
    //         if(existingUser) {
    //           existingUser.name = name;
    //           existingUser.email = email;
    //           existingUser.contact = contact
    //         }
    //       },
    //       deleteUser: (state, action) => {
    //         const { id } = action.payload;
    //         const existingUser = state.find(user => user.id === id);
    //         if(existingUser) {
    //           return state.filter(user => user.id !== id);
    //         }
    //       }
    // }
    name : 'post',
    initialState : {
        post : [],
        loading : false,
        error : null
    },
    extraReducers :{
        [cratePost.pending] : (state, action) => {
            state.loading = true
        },
        [cratePost.fulfilled] : (state , action) =>{
            state.loading = false;
            state.post = [action.payload]
        },
        [cratePost.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
       
    }
})

// export const { addUsers,editUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
