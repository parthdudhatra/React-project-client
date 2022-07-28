import React from 'react';
import {Routes,Route, } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './component/pages/About';
import AddEdit from './component/pages/AddEdit';
import Home from './component/pages/Home';
import View from './component/pages/View';
import Header from './component/Header'

function App() {
  return (
    <div className="App">
        <Header />
        <ToastContainer position='top-center'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/add'  element={<AddEdit />}/>
            <Route path='/update/:id'  element={<AddEdit />}/>
            <Route path='/view/:id'  element={<View />} />
            <Route path='/about'  element={<About />}/>
        </Routes>
        </ToastContainer>
        
    </div>
  );
}

export default App;
