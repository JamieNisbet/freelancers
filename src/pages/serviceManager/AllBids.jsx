import React, { useEffect, useState } from 'react';
import BidListItem from '../../components/BidListItem';
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

  const calDaysLeft = (endDate) => {
    var dateFuture = new Date(endDate);
    var dateNow = new Date();

    var seconds = Math.floor((dateFuture - dateNow) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    return days;
  };

  return (
    <>
      <div className='relative m-auto mt-5 w-fit overflow-x-auto rounded-lg shadow-md sm:rounded-lg'>
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
        <div className='bg-teal text-left text-gradient'>
          <div>
            {state.bids.map((bid, idx) => (
              <BidListItem
                key={idx}
                id={bid.serviceRequestId}
                title={bid.title}
                description={bid.description}
                status={bid.status}
                daysLeft={calDaysLeft(bid.endDate)}
                buttonText='More Info'
                buttonAction={() => console.log(auth.user.firstname)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBids;
