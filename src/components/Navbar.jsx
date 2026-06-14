import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <Zap size={28} />
        <span>Roaring Thunders</span>
      </Link>
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/team" 
          className={`nav-link ${location.pathname.startsWith('/team') ? 'active' : ''}`}
        >
          Team Core
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
