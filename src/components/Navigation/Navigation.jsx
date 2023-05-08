import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/register">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
