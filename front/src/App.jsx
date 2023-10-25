/* style */
import './App.css'

/* dependencies */
import axios from "axios"

/* hooks */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"

/* components to render */
import Home from './views/home/Home';
import Form from './views/form/Form';
import Details from './views/details/Details';
import Landing from './views/landing/Landing';
import Error from './views/error/Error';


function App() {
  return (
    <div>
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
