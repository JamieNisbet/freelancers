import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MenuConstants } from '../config/routes';
import { useSelector, useDispatch } from 'react-redux';
import MenuItem from './MenuItem';
import { logoutUser } from '../reducers/actions/authActions';
import Button from '../components/Button';
import { toast } from 'react-hot-toast';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiOutlineLogout } from 'react-icons/hi';

export default function Header() {
  const [navbar, setNavbar] = useState(true);
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { auth } = storeState;

  return (
    <nav className='w-full bg-navy shadow'>
      <div className='mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl'>
        <div>
          <div className='flex items-center justify-between py-3 md:block md:py-5'>
            <div>
              <h2 className='text-2xl font-bold text-white'>SUPPORT POD</h2>
            </div>
            <div>
              <AiOutlineMenu
                color='white'
                className={`${!navbar ? '' : 'hidden'}`}
                onClick={() => setNavbar(!navbar)}
              />
              <div>
                <div className={`mt-8 pb-3 md:mt-0 md:block md:pb-0 ${navbar ? '' : 'hidden'}`}>
                  <div className='align-items max-w-screen-xl items-center md:px-6'>
                    {auth.user.userRole === 1 && (
                      <ul className='align-items mx-auto flex w-full flex-row flex-wrap items-center'>
                        {MenuConstants.admin.map((item, index) => {
                          return (
                            <li
                              // className='wrap mr-2 ml-2 mb-4 inline-flex justify-between'
                              key={index}
                            >
                              <MenuItem text={item.title} to={item.route} />
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {auth.user.userRole === 2 && (
                      <ul className='align-items mx-auto flex w-full flex-row flex-wrap items-center'>
                        {MenuConstants.freelancer.map((item, index) => {
                          return (
                            <li
                              className='wrap mr-2 ml-2 mb-4 inline-flex justify-between'
                              key={index}
                            >
                              <MenuItem text={item.title} to={item.route} />
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {auth.user.userRole === 3 && (
                      <ul className='align-items mx-auto flex w-full flex-row flex-wrap items-center'>
                        {MenuConstants.serviceManager.map((item, index) => {
                          return (
                            <li
                              className='wrap mr-2 ml-2 mb-4 inline-flex justify-between'
                              key={index}
                            >
                              <MenuItem text={item.title} to={item.route} />
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {auth.isAuthenticated ? (
              <div className='relative top-0 right-0'>
                <Button
                  onClick={() => {
                    toast.success('Notifications');
                  }}
                  icon={<IoMdNotificationsOutline size='1.5rem' />}
                  // className='bg-gray-600 hover:bg-gray-800 rounded-md px-4 py-2 text-white shadow'
                />
                <Button
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                  icon={<HiOutlineLogout size='1.5rem' />}
                  // className='bg-gray-600 hover:bg-gray-800 rounded-md px-4 py-2 text-white shadow'
                />
              </div>
            ) : (
              <div>
                <MenuItem
                  to='/login'
                  text='Log In'
                  // className='bg-gray-600 hover:bg-gray-800 rounded-md px-4 py-2 text-white shadow'
                />
                <MenuItem
                  to='/register'
                  text='Sign Up'
                  // className='bg-gray-600 hover:bg-gray-800 rounded-md px-4 py-2 text-white shadow'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
