import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, placeholder, label, ...rest }) => {
  return (
    <div {...rest}>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <input
        {...rest}
        type={type}
        id={name}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
