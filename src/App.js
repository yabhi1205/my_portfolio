import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Maina from './component/main';
import About from './component/about';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<Maina />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
