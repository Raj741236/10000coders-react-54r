import React from 'react'
import{Routes,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Placements from './Placements';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/placement" element={<Placements/>}></Route>
    </Routes>
  )
}

export default AppRoutes