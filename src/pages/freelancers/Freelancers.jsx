import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import TableItem from '../../components/TableItem';
import axios from 'axios';

// import { useSelector } from 'react-redux';

function Freelancers() {
  // const { auth } = useSelector((state) => state);
  const [state, setState] = useState({
    freelancers: [],
    loading: true,
  });
  // Description : Fetching freelancers
  useEffect(() => {
    setState((prevState) => ({ ...prevState, loading: true }));
    axios
      .get('https://devfreelancersapi.supportpod.com/api/users/freelancers')
      .then((res) => {
        console.log(res.data[0]);

        setState((prevState) => ({
          ...prevState,
          freelancers: res.data,
          loading: false,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {state.loading ? (
        <Loading />
      ) : (
        <div className='sm:rounded-lg relative m-auto mt-5 w-4/5 overflow-x-auto rounded-lg shadow-md'>
          <div className='flex items-center justify-between bg-navy p-4'>
            <div>
              <button
                id='dropdownActionButton'
                data-dropdown-toggle='dropdownAction'
                className='text-gray-500 border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 inline-flex items-center rounded-lg border bg-white px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-4'
                type='button'
              >
                <span className='sr-only'>Action button</span>
                Action
              </button>
              <div
                id='dropdownAction'
                className='divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 z-10 hidden w-44 divide-y rounded bg-white shadow'
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
            </div>
            <label htmlFor='table-search' className='sr-only'>
              Search
            </label>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'></div>
              <input
                type='text'
                id='table-search-users'
                className='text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border p-2 pl-10 text-sm dark:text-white'
                placeholder='Search for users'
              />
            </div>
          </div>
          <table className='text-gray-500 dark:text-gray-400 w-full text-left text-sm'>
            <thead className='text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs uppercase'>
              <tr>
                <th scope='col' className='p-4'>
                  <div className='flex items-center'>
                    <input
                      id='checkbox-all-search'
                      type='checkbox'
                      className='text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2'
                    />
                    <label htmlFor='checkbox-all-search' className='sr-only'>
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Email
                </th>
                <th scope='col' className='py-3 px-6'>
                  Role
                </th>
                <th scope='col' className='py-3 px-6'>
                  Assessment
                </th>
              </tr>
            </thead>
            <tbody>
              {state.freelancers.map((fl, idx) => (
                <TableItem
                  key={idx}
                  name={fl.firstname}
                  email={fl.email}
                  profilePic={fl.profileImage}
                  role={fl.userRole}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Freelancers;
