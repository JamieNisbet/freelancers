import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Protected = ({ children }) => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState;

  if (!auth.isAuthenticated) {
    return <Navigate to='/login' replace />;
  }
  return children;
};

Protected.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Protected;
