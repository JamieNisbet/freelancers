import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ text }) => {
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
          {text}
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
              <li>
                <a
                  href='#'
                  className='hover:bg-gray-100 dark:hover:bg-gray-600 block py-2 px-4 dark:hover:text-white'
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:bg-gray-100 dark:hover:bg-gray-600 block py-2 px-4 dark:hover:text-white'
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:bg-gray-100 dark:hover:bg-gray-600 block py-2 px-4 dark:hover:text-white'
                >
                  Activate account
                </a>
              </li>
            </ul>
            <div className='py-1'>
              <a
                href='#'
                className='text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 block py-2 px-4 text-sm dark:hover:text-white'
              >
                Delete User
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Dropdown;
