import React, { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import "./Add.css";
// import { addUser, getOneUser, editUser} from "../../../Service/api";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
 import { crateUser } from "../../userSlice";

// const initialValue = {
//   name : '',
//   email : '',
//   contact: ''
// }

const Add = () => {
  const dispatch = useDispatch();
  const { post , loading} = useSelector((state) => ({ ...state.users}))
  const [ user, setUser] = useState({ name : "" , email : "" , contact : ""});
  const { name, email ,contact} = user
  
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("......", id)
  useEffect(() => {
    if(id){
      // getSingleUser(id)
    }
  },[id])

  // const getSingleUser = async (id) =>{
  //   const response = await getOneUser(id);
  //   if(response){
  //     console.log("response", response)
  //     setUser(response.data)
  //   }
  // }

  const addUserDetails = async(id) =>{
    // dispatch(addUsers({
    //   id : uuidv4(),
    //   name : user.name,
    //   email : user.email,
    //   contact : user.contact
    // }))
    dispatch(crateUser({user}))
    setUser({ name : "" , email : "" , contact : ""});
    // addUser(user);
    alert('User added succefully')
    console.log("User added succefully", user)
    navigate('/')
  };

  //      

  return (
    <div style={{ marignTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={() => addUserDetails()}
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
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default Add;
