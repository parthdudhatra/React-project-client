import React,{ useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneUser } from '../../../Service/api';
import { useDispatch, useSelector } from 'react-redux';
import './View.css';


const View = () => {
  const params = useParams();
  const userState = useSelector((state) => state.users);
  let { user } = userState
  const existingUser  = user.filter(item => item._id === params.id)
  const a = existingUser[0]
  console.log("data", a)
  // const [data, setData] =useState({
  //   name, email, contact
  // });
  // useEffect (()=> {
  //   if(id) {
  //     setData({ ...user});
  //   }
  // },[id])
  return (
    <div style={{marginTop : "150px"}}>
        <div className='card'>
          <div className='card-head'>
            <p>User Contact Detail</p>
          </div>
          <div className='container'>
            <strong>ID: </strong>
            <span>{a._id}</span>
            <br />
            <br />
            <strong>Name: </strong>
            <span>{a.name}</span>
            <br />
            <br />
            <strong>Email: </strong>
            <span>{a.email}</span>
            <br />
            <br />
            <strong>Contact: </strong>
            <span>{a.contact}</span>
            <br />
            <br />
            <Link to='/'>
              <button className='btn-edit'>Go back</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default View