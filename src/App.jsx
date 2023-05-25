import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
 import Login from './Pages/Login';
import Contact from'./Pages/Contact';
import { Container } from 'react-bootstrap';
import Nav1 from './components/Nav1';

export default function App() {
  return (
    
    <div>
<Nav1/>
<Container >
<>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/About" element={<About />} />
       <Route path="/Contact" element={<Contact/>} />
       
    </Routes>
 </>
  
 
</Container>
    </div>
  )
}



