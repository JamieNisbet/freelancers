import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import RowComponent from './RowComponent';

const TableComponent = ({ type, array }) => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState;
  return (
    <>
      {type === 'bids' && (
        <>
          {array.map((el, i) => (
            <RowComponent key={i} type='bid' item={el} />
          ))}
        </>
      )}

      {type === 'adminUsers' && (
        <>
          {array.map((el, i) => (
            <RowComponent key={i} type='user' item={el} />
          ))}
        </>
      )}

      {type === 'serviceRequests' && (
        <>
          {array.map((el, i) => (
            <NavLink key={i} to={`/service-request?id=${el._id}`}>
              <section className='text-gray-700 body-font tails-selected-element relative mt-2 mr-5 ml-5 w-full rounded bg-white px-8'>
                <div className='container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row'>
                  <a
                    href='#_'
                    className='text-black relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none'
                  >
                    {el.firstname} {el.lastname}
                  </a>

                  <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                    <span className='block'>
                      <b className='underline'>Email</b>
                      <br />
                      {el.email}
                    </span>
                  </div>
                  <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                    <span className='block'>
                      <b className='underline'>Role</b>
                      <br />
                      {el.userRole}
                    </span>
                  </div>
                  <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                    <span className='block'>
                      <b className='underline'>Screen Name</b>
                      <br />
                      {el.screenname}
                    </span>
                  </div>

                  <div className='z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
                    {auth.user.userRole !== 2 && (
                      <a
                        href='#'
                        className='text-gray-600 whitespace-no-wrap border-gray-200 hover:bg-gray-50 inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-base font-medium leading-6 shadow-sm focus:shadow-none focus:outline-none'
                        data-rounded='rounded-md'
                      >
                        {el.participants.length}
                      </a>
                    )}

                    <a
                      href='#'
                      className='text-gray-600 whitespace-no-wrap border-gray-200 hover:bg-gray-50 inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-base font-medium leading-6 shadow-sm focus:shadow-none focus:outline-none'
                      data-rounded='rounded-md'
                    >
                      Update Role
                    </a>

                    <span className='inline-flex rounded-md shadow-sm'>
                      <a
                        href='#'
                        className='whitespace-no-wrap border-blue-700 hover:bg-blue-700 focus:ring-blue-500 inline-flex items-center justify-center rounded-md border bg-success px-4 py-2 text-base font-medium leading-6 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 lg:mx-1'
                        data-rounded='rounded-md'
                        data-primary='blue-600'
                      >
                        Contact
                      </a>
                    </span>
                  </div>
                </div>
              </section>
            </NavLink>
          ))}
        </>
      )}

      {type === 'freelancers' && (
        <>
          {array.map((el, i) => (
            <RowComponent key={i} type='user' item={el} />
          ))}
        </>
      )}
    </>
  );
};

TableComponent.propTypes = {
  type: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
};

export default TableComponent;
