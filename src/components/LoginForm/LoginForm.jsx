import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/api';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = event => {
    setUser(prevUser => ({
      ...prevUser,
      email: event.target.value,
    }));
  };

  const handlePasswordChange = event => {
    setUser(prevUser => ({
      ...prevUser,
      password: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUser(user));
  };
  console.log('LoginForm :>>', LoginForm);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={user.password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
