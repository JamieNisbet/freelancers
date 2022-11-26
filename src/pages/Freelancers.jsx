import React from 'react';
import { useSelector } from 'react-redux';
import Login from './auth/Login';

const Freelancers = () => {
  const auth = useSelector((state) => state.auth.value);
  return (
    <div>
      <p>Freelancers</p>
      <ul>
        <li>Name: {auth.name}</li>
        <li>Email: {auth.email}</li>
        <li>Age: {auth.age}</li>
        <Login />
      </ul>
    </div>
  );
};

export default Freelancers;
