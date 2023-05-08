import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicNav = ({ isAuthenticated }) => (
  <ul>
    {isAuthenticated && (
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    )}
    {!isAuthenticated && (
      <>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </>
    )}
  </ul>
);

PublicNav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PublicNav;
