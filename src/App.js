import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Pricing from './Components/Pricing';
import Info from './Components/Info';
import Contact from './Components/Contact';

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";


function App() {

  return (
      <div>
          
          <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/info' element={<Info />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
         </BrowserRouter>
          <Footer/>
      </div> 
  )}

export default App;
