import React ,{ useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from "axios";
// import { deleteUser } from "../../userSlice";
// import { deleteUser } from '../../../Service/api';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) =>store.users)
  console.log("User", users)
  const [data, setData] = useState([])
  useEffect(() =>{
    getUsers();
  
    // user()
  },[])


  // const user = () => {
  //   let s = new Date();
  //   const min = `${s.getMinutes()}`;
  //   // console.log("min", min)
  //   if(min % 2 === 0){
  //     console.log("true")
  //     getUsers()
  //   }else
  //   {
  //     console.log("false")
  //   }
  // }
  const getUsers = async () => {
    const response = await axios.get("http://localhost:3000/auth/users");
    if(response.status === 200){
      setData(response.data)
    }
  }

  const deleteUserData = async (id) => {
   
    console.log("Id///",id)
    if(
      window.confirm("Are you sure that you wanted to delete that user record")
      ){
        console.log("Id",id)
        // dispatch(deleteUser({ id }));
      }
  }
  console.log(".....",users)
  return (
    <div>
        <table className='styled-table'>
          <thead>
            <tr>
              <th style={{textAlign : "center"}}>No.</th>
              <th style={{textAlign : "center"}}>Name</th>
              <th style={{textAlign : "center"}}>Email</th>
              <th style={{textAlign : "center"}}>Contact</th>
              <th style={{textAlign : "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            { data && data.map((item, index) => {
              return(
                <tr key={index}>
                  <th scope = "row">{index +1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>
                    <Link to={`/update/${item._id}`}>
                      <button className="btn-edit">Edit</button>
                    </Link>
                    <button className='btn-delete' onClick={() => deleteUserData(item._id)}>Delete</button>
                    <Link to={`/view/${item._id}`}>
                      <button className='btn-view'>View</button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Home;