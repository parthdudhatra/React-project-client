import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./Edit.css";
import { updateUser } from "../../../redux/Features/userSlice"
import { useDispatch, useSelector } from "react-redux";

// const initialValue = {
//   name : '',
//   email : '',
//   contact: ''
// }

const Edit = ({ user, setUser}) => {
  const params = useParams();
  const dispatch = useDispatch() 
  const navigate = useNavigate();
  const { id } = useParams();

  // const getSingleUser = () =>{
  //   console.log("Get user", {...user})
  //   setUser({ ...user})
    
  //   // const response = dispatch(getUser({id}))
  //   // const response = await getOneUser(id);
  //   // if(response){
  //   //   console.log("response", response)
  //   //   setUser(response.data)
  //   // }
  // }
  const editUserDetails =() => {
    if( user._id){
      dispatch(updateUser(user))
    }
    alert('User Update successfully')
    console.log("User Update successfully", user)
    navigate('/');
}
  
  const onValueChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }

  return (
    <div style={{ marignTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={() => editUserDetails()}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          placeholder="Enter the name"
          onChange={(e) => {
            onValueChange(e);
          }}
        />
        <label htmlFor="name">Emial</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          placeholder="Enter the email"
          onChange={(e) => {
            onValueChange(e);
          }}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter the contact"
          onChange={(e) => {
            onValueChange(e);
          }}
          value={user.contact}
        />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Edit;
