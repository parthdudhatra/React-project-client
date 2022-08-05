import React , { useState, useEffect }from 'react';
import {Routes,Route, } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './component/pages/About';
import Add from './component/pages/Add/Add';
import Home from './component/pages/Home/Home';
import View from './component/pages/View/View';
import Header from './component/Header'
import Edit from './component/pages/Edit/Edit';


function App() {
  // set the user state here and use as a props
  const [ user, setUser] = useState({name : "" , email : "" , contact : ""})
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Home setUser= {setUser} />} />
            <Route path='/add'  element={<Add  user = {user} setUser= {setUser} />} />
            <Route path='/update/:id' element={<Edit user = {user} setUser= {setUser} />} />
            <Route path='/view/:id'  element={<View />} />
            <Route path='/about'  element={<About />}/>
        </Routes>
    </div>
  );
}

export default App;
