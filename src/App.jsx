import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Landing from './components/Landing';

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Hero />} />
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;

