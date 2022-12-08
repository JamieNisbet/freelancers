import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState;
  return (
    <nav className='flex flex-wrap items-center justify-between bg-teal-500 p-6'>
      <div className='mr-6 flex flex-shrink-0 items-center text-white'>
        <span className='text-xl font-semibold tracking-tight'>Support Pod</span>
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white'>
          <svg
            className='h-3 w-3 fill-current'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='block w-full flex-grow lg:flex lg:w-auto lg:items-center'>
        {!auth.isAuthenticated && (
          <div className='text-sm lg:flex-grow'>
            <Link
              to='/login'
              className='mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block'
            >
              Login
            </Link>
          </div>
        )}
        <div
          onClick={() => toast.success('Hello')}
          className='mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none
          text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0'
        >
          <InformationCircleIcon className='h-12 w-6' />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
