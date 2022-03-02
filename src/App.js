import React from 'react';
import './App.css';
import Header from './componests/header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './componests/home/Home.jsx';
import Description from './componests/description/Description.jsx';
import Pdf from './componests/pdf/Pdf';

function App() {

  return (
    <div className="App">
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/descriptio" element={<Description/>} />
        <Route path='/pdf' element={<Pdf/>}/>
      </Routes>
    </div>
  );
}

export default App;
