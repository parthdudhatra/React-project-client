import React ,{useState, useEffect} from 'react';
import {useLocation , useNavigate} from 'react-router-dom';
import axios from 'axios';
import './AddEdit.css'
import { Toast } from 'bootstrap';


const initialState = {
  name : "",
  email : "",
  contact : ""
}

const AddEdit = () => {
  const [ state, setState] = useState(initialState);
  const navigate = useNavigate();
  const { name , email, contact} = initialState;

  const addContact = async (data) => {
    const response = await axios.post("http://localhost:3000/user", data);
    if(response.status === 200){
      Toast.success(response.data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact) {
      Toast.error("Plase Provide value in each input filed");
    }else{
      addContact(state)
    }
   setTimeout(() => navigate("/"),500)
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name] : value})
  }
  return (
    <div style={{marignTop : "100px"}}>
        <form style={{
          margin :"auto",
          padding : "15px",
          maxWidth : "400px",
          alignContent : "center"
        }}
        onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id='name' 
            name="name"
            placeholder='Enter the name'
            onChange={handleInputChange}
            value={name}
            />
            <label htmlFor="name">Emial</label>
          <input 
            type="email" 
            id='email' 
            name="email"
            placeholder='Enter the email'
            onChange={handleInputChange}
            value={email}
            />
            <label htmlFor="contact">Contact</label>
          <input 
            type="number" 
            id='contact' 
            name="contact"
            placeholder='Enter the contact'
            onChange={handleInputChange}
            value={contact}
            />
            <input type="submit" value="Add" />
        </form>
    </div>
  )
}

export default AddEdit;