import React from 'react';
import PropTypes from 'prop-types';
import blankUser from '../images/blankUser.jpg';

const TableItem = ({ name, email, role }) => {
  return (
    <tr className='dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-b bg-white'>
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <input
            id='checkbox-table-search-1'
            type='checkbox'
            className='text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2'
          />
          <label htmlFor='checkbox-table-search-1' className='sr-only'>
            checkbox
          </label>
        </div>
      </td>
      <th
        scope='row'
        className='text-gray-900 flex items-center whitespace-nowrap py-4 px-6 dark:text-white'
      >
        <img className='h-10 w-10 rounded-full' src={blankUser} alt='profilePic' />
        <div className='pl-3'>
          <div className='text-base font-semibold'>{name}</div>
          <div className='text-gray-500 font-normal'>React Developer</div>
        </div>
      </th>
      <td className='py-4 px-6'>{email}</td>
      <td className='py-4 px-6'>
        <div className='flex items-center'>
          <div className='bg-green-400 mr-2 h-2.5 w-2.5 rounded-full'></div>{' '}
          {role === 2 ? 'Freelancer' : 'Admin'}
        </div>
      </td>
      <td className='py-4 px-6'>
        <a
          href='#'
          type='button'
          data-modal-toggle='editUserModal'
          className='text-blue-600 dark:text-blue-500 font-medium hover:underline'
        >
          Edit user
        </a>
      </td>
    </tr>
  );
};

TableItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  profilePic: PropTypes.string,
  role: PropTypes.string,
};

export default TableItem;
