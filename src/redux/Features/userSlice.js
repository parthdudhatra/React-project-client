import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:4200"

const initialState = {
    user: [],
    addUserStatus: "",
    addUserError: "",
    getUserStatus: "",
    getUserError: "",
    deleteUserStatus: "",
    deleteUserError: "",
    updateUserStatus: "",
    updateUserError: "",
  };

// post the user
export const createUser = createAsyncThunk('user/createUser', async(user,{ rejectWithValue}) => {
    try{
        const response = await axios.post(`${baseUrl}/auth/user`, user)
        // debugger;
        return response.data
    }catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data);
      }
})

// get the user 
export const getUser = createAsyncThunk(
    "user/getUser",
    async (id = null, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${baseUrl}/auth/users`);
        console.log("response", response);
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data);
      }
    }
);

// delete User 
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async(id, { rejectWithValue}) => {
    try {
      const response = await axios.delete(`${baseUrl}/auth/user/${id}`);
      return response.data
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data)
    }
  }
);

// update the user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async(user, { rejectWithValue}) => {
    try {
      console.log("update",user)
      const { _id, name, email, contact } = user
      // debugger;
      const response = await axios.put(`${baseUrl}/auth/user/${_id}` ,{name, email , contact});
      console.log(response.data,"rrrrrrrrrrrr")
      // debugger;
      return response.data;
    }catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data)
    }
  }
)
  

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers :{
      // create user
        [createUser.pending]: (state, action) => {
            return {
              ...state,
              addUserStatus: "pending",
              addUserError: "",
              getUserStatus: "",
              getUserError: "",
              deleteUserStatus: "",
              deleteUserError: "",
              updateUserStatus: "",
              updateUserError: "",
            };
          },
          [createUser.fulfilled]: (state, action) => {
            // state.todos.push(action.payload);
            // debugger;
            return {
              ...state,
              user: [action.payload, ...state.user],
              addUserStatus: "success",
              addUserError: "",
              getUserStatus: "",
              getUserError: "",
              deleteUserStatus: "",
              deleteUserError: "",
              updateUserStatus: "",
              updateUserError: "",
            };
          },
          [createUser.rejected]: (state, action) => {
            return {
              ...state,
              addUserStatus: "rejected",
              addUserError: action.payload,
              getUserStatus: "",
              getUserError: "",
              deleteUserStatus: "",
              deleteUserError: "",
              updateUserStatus: "",
              updateUserError: "",
            };
          },
          //get data
          [getUser.pending]: (state, action) => {
            return {
              ...state,
              addUserStatus: "",
              addUserError: "",
              getUserStatus: "pending",
              getUserError: "",
              deleteUserStatus: "",
              deleteUserError: "",
              updateUserStatus: "",
              updateUserError: "",
            };
          },
          [getUser.fulfilled]: (state, action) => {
            // state.todos.push(action.payload);
            return {
              ...state,
              user: action.payload,
              addUserStatus: "",
              addUserError: "",
              getUserStatus: "success",
              getUserError: "",
              deleteUserStatus: "",
              deleteUserError: "",
              updateUserStatus: "",
              updateUserError: "",
            };
          },
          [getUser.rejected]: (state, action) => {
            return {
              ...state,
              addUserStatus: "",
              addUserError: "",
              getUserStatus: "rejected",
              getUserError: action.payload,
              deleteUserStatus: "",
              deleteUserError: "",
              updateUserStatus: "",
              updateUserError: "",
            };
          },
       // delete user
       [deleteUser.pending] : (state, action) => {
        return {
          ...state,
          addUserStatus: "",
          addUserError: "",
          getUserStatus: "",
          getUserError: "",
          deleteUserStatus: "pending",
          deleteUserError: "",
          updateUserStatus: "",
          updateUserError: "",
        }
       },
       [deleteUser.fulfilled]: (state, action) => {
          const currentUser = state.user.filter(
            (use) => use._id !== action.payload._id 
          )
        // state.todos.push(action.payload);
        return {
          ...state,
          user: currentUser,
          addUserStatus: "",
          addUserError: "",
          getUserStatus: "",
          getUserError: "",
          deleteUserStatus: "success",
          deleteUserError: "",
          updateUserStatus: "",
          updateUserError: "",
        };
      },
      [deleteUser.rejected]: (state, action) => {
        return {
          ...state,
          addUserStatus: "",
          addUserError: "",
          getUserStatus: "",
          getUserError:"" ,
          deleteUserStatus: "rejected",
          deleteUserError: action.payload,
          updateUserStatus: "",
          updateUserError: "",
        };
      },
      // update
      [updateUser.pending] : (state, action) => {
        return {
          ...state,
          addUserStatus: "",
          addUserError: "",
          getUserStatus: "",
          getUserError: "",
          deleteUserStatus: "",
          deleteUserError: "",
          updateUserStatus: "pending",
          updateUserError: "",
        }
       },
       [updateUser.fulfilled]: (state, action) => {
          const user = [...state.user];
          const userIndex = user.findIndex(
            (item) => item._id === action.payload._id
          );
          user[userIndex] = action.payload
        return {
          ...state,
          user: user,
          addUserStatus: "",
          addUserError: "",
          getUserStatus: "",
          getUserError: "",
          deleteUserStatus: "",
          deleteUserError: "",
          updateUserStatus: "success",
          updateUserError: "",
        };
      },
      [updateUser.rejected]: (state, action) => {
        return {
          ...state,
          addUserStatus: "",
          addUserError: "",
          getUserStatus: "",
          getUserError:"" ,
          deleteUserStatus: "",
          deleteUserError: "",
          updateUserStatus: "rejected",
          updateUserError:action.payload,
        };
      },
    }
})

export default userSlice.reducer;
