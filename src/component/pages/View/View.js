import React,{ useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneUser } from '../../../Service/api';
import './View.css';


const View = () => {
  const [user, setUser] =useState(null);
  const { id } = useParams();

  useEffect (()=> {
    if(id) {
      getSingleUser(id);
    }
  },[id])
  const getSingleUser = async (id) =>{
    const response = await getOneUser(id);
    if(response){
      console.log("response", response)
      setUser(response.data)
    }
  }
  return (
    <div style={{marginTop : "150px"}}>
        <div className='card'>
          <div className='card-head'>
            <p>User Contact Detail</p>
          </div>
          <div className='container'>
            <strong>ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name: </strong>
            <span>{user && user.name}</span>
            <br />
            <br />
            <strong>Email: </strong>
            <span>{user && user.email}</span>
            <br />
            <br />
            <strong>Contact: </strong>
            <span>{ user && user.contact}</span>
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