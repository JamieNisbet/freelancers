import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, ...rest }) => {
  return (
    <button
      {...rest}
      className='hover:bg-blue-500 text-blue-700 border-blue-500 rounded border bg-transparent py-2 px-4 font-semibold hover:border-transparent hover:text-white'
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
