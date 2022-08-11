import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Knowledge from './components/Knowledge';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Concepts from './components/Concepts';

function App() {
  localStorage.setItem("loginvalue", null);
  return (
    <div className="app">
      <header className='header'>
        <Header />
      </header>
      <section>
        <div className='section'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </section>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
