import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../api/auth';
import './Navigation.css';

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authAPI.logout();
    navigate('/login');
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/dashboard" className="nav-brand">
          🏛️ NagrikSathi
        </Link>
        <div className="nav-links">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/submit" className="nav-link">
            Submit Complaint
          </Link>
          <button onClick={handleLogout} className="nav-link nav-logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
