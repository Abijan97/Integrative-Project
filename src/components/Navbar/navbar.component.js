import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar=()=>{


    return (
      <nav className="navbar  navbar-dark bg-primary navbar-expand-lg">
       
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
         
          <li className="navbar-item">
          <Link to="/dashboard" className="nav-link">Sensor readings</Link>
          </li>
          <li className="navbar-item">
          <Link to="/dashboard" className="nav-link">Add Sensors</Link>
          </li>

        </ul>
        </div>
      </nav>
    );
  
}