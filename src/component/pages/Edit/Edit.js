import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./Edit.css";
// import { editUser } from "../../userSlice";
// import { getOneUser, editUser} from "../../../Service/api";
import { useDispatch, useSelector } from "react-redux";

const initialValue = {
  name : '',
  email : '',
  contact: ''
}

const Edit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const existingUser = users.filter(user => user.id === params.id);
 const [ user, setUser] = useState(initialValue);
  const { name, email ,contact} = existingUser[0]
  
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   if(id){
  //     getSingleUser(id)
  //   }
  // },[id])

  // const getSingleUser = async (id) =>{
  //   const response = await getOneUser(id);
  //   if(response){
  //     console.log("response", response)
  //     setUser(response.data)
  //   }
  // }

  const editUserDetails = async() => {
    // dispatch(editUser({
    //   id: params.id,
    //   name: user.name,
    //   email: user.email
    // }));
    // const response = editUser(id, user);
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
          value={name}
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
          value={email}
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
          value={contact}
        />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Edit;
