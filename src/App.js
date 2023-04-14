import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Maina from './component/main';
import Skills from './component/skills';
import Projects from './component/projects';
import Posts from './component/posts';
import About from './component/about';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Maina />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
