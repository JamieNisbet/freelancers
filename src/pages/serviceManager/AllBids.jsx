import React, { useEffect, useState } from 'react';
import TableItem from '../../components/TableItem';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../reducers/actions/uiActions';
import Dropdown from '../../components/Dropdown';

export const AllBids = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const [state, setState] = useState({
    bids: [],
    errors: {},
  });

  useEffect(() => {
    dispatch(setLoading(true));
    fetchBids();
    dispatch(setLoading(false));
  }, []);

  const fetchBids = () => {
    axios
      .get('https://devfreelancersapi.supportpod.com/api/bids/bids')
      .then((res) => {
        console.log(res.data);
        setState((prev) => ({
          ...prev,
          bids: res.data,
        }));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className='sm:rounded-lg relative m-auto mt-5 w-4/5 overflow-x-auto rounded-lg shadow-md'>
        <div className='flex items-center justify-between bg-teal p-4'>
          <Dropdown text='Actions' />
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
        <table className='w-full bg-teal text-left text-gradient'>
          <thead className='text-gray-700 dark:bg-gray-700 dark:text-gray-400 bg-teal text-xs uppercase'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-all-search'
                    type='checkbox'
                    className='text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2'
                  />
                </div>
              </th>
              <th scope='col' className='py-3 px-6'>
                ID
              </th>
              <th scope='col' className='py-3 px-6'>
                Title & Description
              </th>
              <th scope='col' className='py-3 px-6'>
                Budget
              </th>
              {auth.user.userRole !== 2 ? (
                <th scope='col' className='py-3 px-6'>
                  Proposals
                </th>
              ) : (
                <th scope='col' className='py-3 px-6'>
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {state.bids.map((bid, idx) => (
              <TableItem key={idx} item={bid} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBids;
