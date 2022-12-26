import React from 'react';
import { FaGavel } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { daysTill } from '../utils/dates';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const RowComponent = ({ type, item }) => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState;
  return (
    <>
      {type === 'bid' && (
        <>
          <NavLink to={`/bid-request?id=${item._id}`}>
            <section className='text-gray-700 body-font tails-selected-element relative mt-2 mr-5 ml-5 w-full rounded bg-white px-8'>
              <div className='container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row'>
                <a
                  href='#_'
                  className='text-black relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none'
                >
                  # {item.serviceRequestId}
                </a>

                <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                  <span className='block'>
                    <b className='underline'>Title</b>
                    <br />
                    {item.title}
                  </span>
                </div>
                <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                  <span className='block'>
                    <b className='underline'>Category</b>
                    <br />
                    {item.category}
                  </span>
                </div>
                <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                  <span className='block'>
                    <b className='underline'>Budget</b>
                    <br />
                    {item.minBudget} - {item.maxBudget}
                  </span>
                </div>

                <div className='z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
                  {auth.user.userRole !== 2 && (
                    <a
                      href='#'
                      className='text-gray-600 whitespace-no-wrap border-gray-200 hover:bg-gray-50 inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-base font-medium leading-6 shadow-sm focus:shadow-none focus:outline-none'
                      data-rounded='rounded-md'
                    >
                      {item.participants.length} <FaGavel />
                    </a>
                  )}
                  {daysTill(item.endDate) > 0 && (
                    <a
                      href='#'
                      className='text-gray-600 whitespace-no-wrap border-gray-200 hover:bg-gray-50 inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-base font-medium leading-6 shadow-sm focus:shadow-none focus:outline-none'
                      data-rounded='rounded-md'
                    >
                      closes in {daysTill(item.endDate)} days
                    </a>
                  )}
                  {item.status === 'open' ? (
                    <span className='inline-flex rounded-md shadow-sm'>
                      <a
                        href='#'
                        className='whitespace-no-wrap border-blue-700 hover:bg-blue-700 focus:ring-blue-500 inline-flex items-center justify-center rounded-md border bg-success px-4 py-2 text-base font-medium leading-6 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 lg:mx-1'
                        data-rounded='rounded-md'
                        data-primary='blue-600'
                      >
                        Bid Now
                      </a>
                    </span>
                  ) : (
                    <span className='inline-flex rounded-md shadow-sm'>
                      <a
                        href='#'
                        className='whitespace-no-wrap border-blue-700 hover:bg-blue-700 focus:ring-blue-500 inline-flex items-center justify-center rounded-md border bg-error px-4 py-2 text-base font-medium leading-6 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 lg:mx-1'
                        data-rounded='rounded-md'
                        data-primary='blue-600'
                      >
                        Closed
                      </a>
                    </span>
                  )}
                </div>
              </div>
            </section>
          </NavLink>
        </>
      )}

      {type === 'serviceRequest' && (
        <>
          <div>{item.serviceRequestId}</div>
        </>
      )}

      {type === 'user' && (
        <NavLink to={`/user?id=${item._id}`}>
          <section className='text-gray-700 body-font tails-selected-element relative mt-2 mr-5 ml-5 w-full rounded bg-white px-8'>
            <div className='container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row'>
              <a
                href='#_'
                className='text-black relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none'
              >
                {item.firstname} {item.lastname}
              </a>

              <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                <span className='block'>
                  <b className='underline'>Email</b>
                  <br />
                  {item.email}
                </span>
              </div>
              <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                <span className='block'>
                  <b className='underline'>Role</b>
                  <br />
                  {item.userRole}
                </span>
              </div>
              <div className='text-gray-600 hover:text-gray-900 relative m-5 font-medium leading-6 transition duration-150 ease-out'>
                <span className='block'>
                  <b className='underline'>Screen Name</b>
                  <br />
                  {item.screenname}
                </span>
              </div>

              <div className='z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
                {auth.user.userRole !== 2 && (
                  <a
                    href='#'
                    className='text-gray-600 whitespace-no-wrap border-gray-200 hover:bg-gray-50 inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-base font-medium leading-6 shadow-sm focus:shadow-none focus:outline-none'
                    data-rounded='rounded-md'
                  >
                    {item.participants.length}
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
      )}
    </>
  );
};

RowComponent.propTypes = {
  type: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

export default RowComponent;
