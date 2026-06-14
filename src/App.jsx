import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Member from './pages/Member';

function App() {
  return (
    <div className="app-container">
      <div className="bg-effects">
        <div className="bg-grid"></div>
      </div>
      
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<Member />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
