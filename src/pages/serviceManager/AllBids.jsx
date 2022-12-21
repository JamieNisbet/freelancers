import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import BidListItem from '../../components/BidListItem';
import { freelancerApi, adminApi, authToken } from '../../axios';
import FilterBar from '../../components/FilterBar';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../reducers/actions/uiActions';
import Table from '../../components/Table';
import * as URL from '../../utils/apiEndpoints';

export const AllBids = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState({
    status: '',
    category: '',
    dateRange: [],
  });

  const [state, setState] = useState({
    initialBids: [],
    bids: [],
    errors: {},
  });

  useEffect(() => {
    dispatch(setLoading(true));
    fetchBids();
    fetchCategories();
    dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    filterBids({ type: 'search', value: query });
  }, [query]);

  const fetchBids = () => {
    freelancerApi
      .get(URL.BIDS, authToken)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          initialBids: res.data,
          bids: res.data,
        }));
      })
      .catch((err) => console.log(err));
  };

  const fetchCategories = () => {
    adminApi
      .get(URL.GET_SERVICE_CATEGORIES, authToken)
      .then((res) => {
        const categories = res.data.filter((e) => e.isActive);
        const categoryList = categories.map((el) => el.categoryName);
        setState((prevState) => ({ ...prevState, categories: categoryList }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterBids = (filter) => {
    freelancerApi
      .post(
        URL.FILTER_SEARCH_BIDS,
        {
          type: filter.type,
          value: filter.value,
        },
        authToken,
      )
      .then((res) => {
        setState((prev) => ({
          ...prev,
          bids: res.data,
        }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='flex flex-row bg-primary'>
        <div className='flex flex-col'>
          <FilterBar title='Status' options={['open', 'closed']} filterFunc={filterBids} />
          <FilterBar title='Category' options={state.categories} filterFunc={filterBids} />
        </div>

        <div className='relative m-auto mt-5 w-fit overflow-x-auto rounded-lg shadow-md sm:rounded-lg'>
          <div className='bg-teal flex items-center justify-between p-4'>
            <label htmlFor='table-search' className='sr-only'>
              Search
            </label>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'></div>
              <input
                type='text'
                id='table-search-users'
                onChange={(e) => {
                  const value = e.target.value;
                  const query = value.toLowerCase();
                  setQuery(query);
                }}
                className='text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border p-2 pl-10 text-sm'
                placeholder='Search by id or title'
              />
            </div>
          </div>
          <div className='bg-teal text-gradient text-left'>
            <div>
              <Table data={state.bids} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBids;
