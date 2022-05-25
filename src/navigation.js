import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from './pages/signup';
import Login from './pages/login';
import UserHome from './pages/userHome';
function Navigation(){
    return(
        <BrowserRouter>
            <Routes>
                 <Route path='/' exact element={<Home/>}/>
                 <Route path='/Login' exact element={<Login/>}/>
                 <Route path='/signup' exact element={<Signup/>}/>
                 <Route path='/userhome' exact element={<UserHome/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;