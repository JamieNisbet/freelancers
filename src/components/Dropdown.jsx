import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ title, options, filterFunc }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        <button
          className='text-gray-500 border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-flex items-center rounded-lg border bg-white px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-4'
          onClick={handleOpen}
        >
          {title}
        </button>
        {open ? (
          <div
            id='dropdownAction'
            className='divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 z-10 w-44 divide-y rounded bg-white shadow'
          >
            <ul
              className='text-gray-700 dark:text-gray-200 py-1 text-sm'
              aria-labelledby='dropdownActionButton'
            >
              {options.map((option, i) => (
                <li key={i}>
                  <button
                    onClick={filterFunc({ type: title, value: option })}
                    className='hover:bg-gray-100 dark:hover:bg-gray-600 block py-2 px-4 dark:hover:text-white'
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  filterFunc: PropTypes.func.isRequired,
};

export default Dropdown;
