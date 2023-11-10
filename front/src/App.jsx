/* style */
import './App.css'

/* dependencies */
import axios from "axios"

/* hooks */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"

/* components to render */
import {Home, Form, Details, Landing, Error } from "./views/index"
import Navbar from './components/navbar/Navbar';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
        {location.pathname !== "/" && <Navbar/>}
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/form' element={<Form/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
