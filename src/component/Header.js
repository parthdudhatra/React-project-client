import React, { useEffect , useState} from 'react'
import { useLocation, Link, Outlet } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Header.css'


const Header = () => {
  
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() =>{
    if(location.pathname === "/"){
        setActiveTab("Home");
    } else if(location.pathname === "/add"){
        setActiveTab("AddUser");
    } else if(location.pathname === "/about"){
        setActiveTab("About")
    }
  },[location])  
  return (
    <div className='header'>    
        <Link style={{
            fontwWeight: "bold",
            color: "#5c3239",
            textDecoration: "none",
            fontSize: "25px",
            position : "absolute",
            left:'30px'
            }} to={"/"}>User Managemant system</Link>
        {/* <p className='logo'>User Managemant system</p> */}
        <div className='header-right'>
        <Stack spacing={2} direction='row'>
        <Link to='/'>
            <Button 
                variant="contained"
                className={`${activeTab === "Home" ? "active" : ""}`}
                onClick={()=>setActiveTab("Home")}>Home
            </Button>
        </Link>
        <Link to='/add'>
            <Button 
                variant="contained"
                className={`${activeTab === "AddUser" ? "active" : ""}`}
                onClick={()=>setActiveTab("AddUser")}>AddUser
            </Button>
        </Link>
        <Link to='/about'>
            <Button 
                variant="contained"
                className={`${activeTab === "About" ? "active" : ""}`}
                onClick={()=>setActiveTab("About")}>About
            </Button>
        </Link>
        <Outlet />
        </Stack>
            
        </div>
    </div>
  )
}

export default Header;