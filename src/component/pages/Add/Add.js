import React, { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import "./Add.css";
import { createUser } from "../../../redux/Features/userSlice";
import { useDispatch, useSelector } from "react-redux";

// const initialValue = {
//   name : '',
//   email : '',
//   contact: ''
// }

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ user, setUser] = useState({ name : "" , email : "" , contact : ""});
  const { name, email ,contact} = user

  useEffect(() => {
    
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newUser = { ...user }
    dispatch(createUser(newUser))
    setUser({ 
      name : "" , 
      email : "" , 
      contact : ""
    });
    // window.localStorage.setItem('users',newUser.toString());
    // addUser(user);
    alert('User added succefully')
    console.log("User added succefully", user)
    navigate('/')
  };

  return (
    <div style={{ marignTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter the name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label htmlFor="name">Emial</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter the email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter the contact"
          onChange={(e) => setUser({ ...user, contact: e.target.value })}
          value={contact}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Add;
