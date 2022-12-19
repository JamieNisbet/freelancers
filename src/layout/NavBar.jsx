import React from 'react';
import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
import { MenuConstants } from '../config/routes';
import MenuItem from './MenuItem';

const NavBar = () => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState;

  // if (auth.user.userRole === 1) {
  //   const adminRoutes = MenuConstants.admin;
  //   console.log(adminRoutes);
  // }
  return (
    <nav className='border-navy bg-navy p-12 text-center'>
      <div className='max-w-screen-xl md:px-6 mx-auto flex flex-wrap items-center justify-between'>
        {auth.user.userRole === 1 && (
          <ul className='w-full'>
            {MenuConstants.admin.map((item, index) => {
              return (
                <li className='wrap mr-2 ml-2 mb-4 inline-flex justify-between' key={index}>
                  <MenuItem text={item.title} to={item.route} />
                </li>
              );
            })}
          </ul>
        )}
        {auth.user.userRole === 2 && (
          <ul className='w-full'>
            {MenuConstants.freelancer.map((item, index) => {
              return (
                <li className='wrap mr-2 ml-2 mb-4 inline-flex justify-between' key={index}>
                  <MenuItem text={item.title} to={item.route} />
                </li>
              );
            })}
          </ul>
        )}
        {auth.user.userRole === 3 && (
          <ul className='w-full'>
            {MenuConstants.serviceManager.map((item, index) => {
              return (
                <li className='wrap mr-2 ml-2 mb-4 inline-flex justify-between' key={index}>
                  <MenuItem text={item.title} to={item.route} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* <div
        id='mega-menu-full-dropdown'
        className='border-gray-200 dark:bg-gray-800 dark:border-gray-600 mt-1 border-y bg-white shadow-sm'
      >
        <div className='max-w-screen-xl text-gray-900 sm:grid-cols-2 md:grid-cols-3 md:px-6 mx-auto grid py-5 px-4 dark:text-white'>
          <ul aria-labelledby='mega-menu-full-dropdown-button'>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Online Stores</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that youre already using.
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Segmentation</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that youre already using.
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Marketing CRM</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that yore already using.
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Online Stores</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that youre already using.
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Segmentation</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that youre already using.
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Marketing CRM</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that youre already using.
                </span>
              </a>
            </li>
          </ul>
          <ul className='md:block hidden'>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Audience Management</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that youre already using.
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Creative Tools</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that youre already using.
                </span>
              </a>
            </li>
            <li>
              <a href='#' className='hover:bg-gray-50 dark:hover:bg-gray-700 block rounded-lg p-3'>
                <div className='font-semibold'>Marketing Automation</div>
                <span className='text-gray-500 dark:text-gray-400 text-sm font-light'>
                  Connect with third-party tools that yore already using.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
