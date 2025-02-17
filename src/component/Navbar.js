import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{borderRadius: '2px', border: '2px solid #28a745'}}>
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">Product_Management_System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize: '0.8rem'}}>
              <li className="nav-item">
              
              <Link to="/#" className = "nav-link" style={{color: 'yellow', marginRight: '10px', fontWeight: 'bold'}}>Home</Link>
              </li>
              <li className="nav-item">
                
                <Link to="addProduct" className = "nav-link" style={{color: 'yellow', marginRight: '10px', fontWeight: 'bold'}}>AddProduct</Link>
              </li>
               
               </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
