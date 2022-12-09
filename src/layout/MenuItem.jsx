import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const MenuItem = ({ permission, text, ...rest }) => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState;

  return (
    <>
      {!permission || auth.user.userRole === permission ? (
        <Link
          {...rest}
          className='sm:w-auto w-full rounded-lg bg-gradient  p-2 text-center text-sm font-medium text-navy focus:underline'
        >
          {text}
        </Link>
      ) : null}
    </>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  permission: PropTypes.string,
};

export default MenuItem;
