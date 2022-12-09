import React from 'react';
import PropTypes from 'prop-types';
import blankUser from '../images/blankUser.jpg';
import { profileImgUrl } from '../config/Constants';
import { CgProfile } from 'react-icons/cg';
import { FaPassport } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { IoMdSchool } from 'react-icons/io';
import { MdVerifiedUser } from 'react-icons/md';
import { RiAuctionFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';

const TableItem = ({ item }) => {
  const location = useLocation();
  const { auth } = useSelector((state) => state);
  return (
    <>
      {location.pathname === '/freelancers' && (
        <tr
          className={
            'dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 bg-white  text-navy'
          }
        >
          <td className='w-4 p-4'>
            <div className='flex items-center'>
              <input
                id='checkbox-table-search-1'
                type='checkbox'
                className='text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2'
              />
            </div>
          </td>
          <th
            scope='row'
            className='text-gray-900 flex items-center whitespace-nowrap py-4 px-6 dark:text-white'
          >
            <img
              className='h-12 w-12 rounded-lg border-2'
              src={
                item.profileImage
                  ? `${profileImgUrl}/${item.profileImage.replace('public', '')}`
                  : blankUser
              }
              alt='profilePic'
            />
            <div className='pl-4'>
              <div className='text-base font-semibold text-navy'>
                {item.firstname} {item.lastname}
              </div>
              <div className='text-gray-500 font-normal text-teal'>{item.profiletitle}</div>
            </div>
          </th>
          <td className='py-4 px-6'>{item.email}</td>
          <td className='py-4 px-6'>
            <div className='flex items-center'>
              <div className='bg-green-400 mr-2 rounded-full'>
                {item.isActive ? (
                  <MdVerifiedUser color='green' size='1.5rem' />
                ) : (
                  <MdVerifiedUser color='red' size='1.5rem' />
                )}
              </div>
              <div className='bg-green-400 mr-2 rounded-full'>
                {item.isProfileComplete ? (
                  <CgProfile color='green' size='1.5rem' />
                ) : (
                  <CgProfile color='red' size='1.5rem' />
                )}
              </div>
              <div className='bg-green-400 mr-2 rounded-full'>
                {item.isPhotoIdVerified ? (
                  <FaPassport color='green' size='1.5rem' />
                ) : (
                  <FaPassport color='red' size='1.5rem' />
                )}
              </div>
              <div className='bg-green-400 mr-2 rounded-full'>
                {item.isPhotoIdVerified ? (
                  <IoMdSchool color='green' size='1.5rem' />
                ) : (
                  <IoMdSchool color='red' size='1.5rem' />
                )}
              </div>
            </div>
          </td>
          <td className='py-4 px-6'>
            <a
              href='#'
              type='button'
              data-modal-toggle='editUserModal'
              className='text-blue-600 dark:text-blue-500 font-medium hover:underline'
            >
              {item.perHourRate ? `${item.perHourRate} ${item.perHourCurrency}` : null}
            </a>
          </td>
        </tr>
      )}
      {location.pathname === '/all-bids' && (
        <tr className='dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 bg-white  text-navy'>
          <td className='w-4 p-4'>
            <div className='flex items-center'>
              <input
                id='checkbox-table-search-1'
                type='checkbox'
                className='text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded focus:ring-2'
              />
            </div>
          </td>
          <th
            scope='row'
            className='text-gray-900 flex items-center whitespace-nowrap py-4 px-6 dark:text-white'
          >
            <div className='pl-4'>
              <div
                className={
                  item.status === 'open'
                    ? 'm-2 w-fit rounded-lg bg-green p-3 font-semibold text-gradient'
                    : 'm-2 w-fit rounded-lg bg-red p-3 font-semibold text-gradient'
                }
              >
                {item.serviceRequestId}
              </div>
            </div>
          </th>
          <td className='py-4 px-6'>
            <div className='inline-flex items-center'>
              <div className='m-2 w-fit rounded-lg bg-blue p-3 text-teal'>{item.title}</div>
              <div className='m-2 p-2 text-navy'>{item.description}</div>
            </div>
          </td>
          <td className='mx-6 py-6'>
            <div className='flex items-center'>
              <div className='align-items w-auto rounded-lg bg-blue p-2 text-teal'>
                <ul>
                  <li>Min: {item.minBudget}</li>
                  <li>Max: {item.maxBudget}</li>
                </ul>
              </div>
            </div>
          </td>
          <td className='py-4 px-6'>
            <div className='text-blue-600 dark:text-blue-500 font-medium hover:underline'>
              {auth.user.userRole !== 2 && (
                <div className='align-items inline-flex rounded-lg bg-blue p-3 text-teal'>
                  {item.participants.length} <RiAuctionFill className='ml-2' size='1.2rem' />
                </div>
              )}
              {auth.user.userRole === 2 && item.status === 'open' && (
                <div className='align-items inline-flex w-32 rounded-lg bg-blue p-3 text-gradient'>
                  <AiOutlineEdit size='2rem' /> Bid Now
                </div>
              )}
              {auth.user.userRole === 2 && item.status === 'closed' && (
                <div className='align-items inline-flex w-32 rounded-lg bg-blue p-3 text-gradient'>
                  <MdOutlineCancel size='2rem' /> Closed
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

TableItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TableItem;
