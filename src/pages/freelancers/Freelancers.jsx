import React from 'react';
import { useSelector } from 'react-redux';

const Freelancers = () => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState 
  return (
    <div>
      <p>Freelancers</p>
      <ul>
        <li>Name: {auth.user.firstname} {auth.user.lastname}</li>
        <li>Email: {auth.user.email}</li>
      </ul>
    </div>
  );
};

export default Freelancers;
