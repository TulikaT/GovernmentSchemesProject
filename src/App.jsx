import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import GovSchemesDashboard from "./pages/GovSchemesDashboard";

function App() {
  

  return (
    <div className="App page-container">
    <Navbar />
    <Routes className='routes'>

    <Route path='/' element={<Home/>} />
    <Route path='/schemes' element={<GovSchemesDashboard/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    
    </Routes>
    <Footer />
    </div>
  );
}

export default App;

