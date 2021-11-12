import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <div className="navBar">
        <Link to={'/'}>
          <i className="fas fa-home fa-2x navBar-icon"></i>
        </Link>
      </div>
    );
}

export default Navbar;