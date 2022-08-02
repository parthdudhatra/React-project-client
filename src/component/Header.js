import React, { useEffect , useState} from 'react'
import { useLocation, Link, Outlet } from 'react-router-dom'
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
            <Link to='/'>
                <p className={`${activeTab === "Home" ? "active" : ""}`}
                onClick={()=>setActiveTab("Home")}
                >Home</p>
            </Link>
            <Link to='/add'>
                <p className={`${activeTab === "AddUser" ? "active" : ""}`}
                onClick={()=>setActiveTab("AddUser")}
                >AddUser</p>
            </Link>
            <Link to='/about'>
                <p className={`${activeTab === "About" ? "active" : ""}`}
                onClick={()=>setActiveTab("About")}
                >About</p>
            </Link>
            <Outlet />
        </div>
    </div>
  )
}

export default Header;