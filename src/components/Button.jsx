import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, icon, ...rest }) => {
  return (
    <button
      {...rest}
      className='border-blue-500 mr-2 ml-2 mt-2 mb-2 rounded border bg-teal py-2 px-2 text-center font-semibold text-blue hover:border-transparent hover:bg-blue hover:text-white'
    >
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
