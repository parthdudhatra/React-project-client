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

const Edit = () => {
  const params = useParams();
  const dispatch = useDispatch() 
  const navigate = useNavigate();
  // const { id } = useParams();
  const { user } = useSelector((store) => store.users);
  const existingUser = user.filter((item) => item._id === params.id);
  const {_id,name, email , contact} = existingUser[0];
  const [ value, setValue ] = useState({_id,name, email, contact})

  useEffect(()=>{
    
  },[])

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
  const editUserDetails =(e) => {
    e.preventDefault();
    setValue({_id:'',name: '', email:'', contact:''})
    dispatch(updateUser({_id: value._id ,name : value.name, email : value.email, contact : value.contact} ));
    setValue({
      _id :'', 
      name : "" , 
      email : "" , 
      contact : ""
    });
    console.log("FFFFFFFFFFF", value)
    navigate('/')
    // if( user._id){
    //   dispatch(updateUser(user))
    // }
    // setUser({...user})
    // alert('User Update successfully')
    // console.log("User Update successfully", user)
    // navigate('/');
}
  
  // const onValueChange = (e) => {
  //   setValue({...value, [e.target.name] : e.target.value})
  // }

  return (
    <div style={{ marignTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={(e) => editUserDetails(e)}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={value.name}
          placeholder="Enter the name"
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <label htmlFor="name">Emial</label>
        <input
          type="email"
          id="email"
          name="email"
          value={value.email}
          placeholder="Enter the email"
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Enter the contact"
          onChange={(e) => setValue({ ...value, contact: e.target.value })}
          value={value.contact}
        />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Edit;
