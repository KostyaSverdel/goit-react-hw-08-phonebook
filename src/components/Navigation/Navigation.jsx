import { React } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
