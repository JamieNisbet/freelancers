import React from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
import { MenuConstants } from '../config/routes';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HiOutlineBell } from 'react-icons/hi';
// import { logoutUser } from '../reducers/actions/authActions';
// import { toast } from 'react-hot-toast';
// import { IoMdNotificationsOutline } from 'react-icons/io';
// import { HiOutlineLogout } from 'react-icons/hi';

export default function Header() {
  // const [navbar, setNavbar] = useState(true);
  const storeState = useSelector((state) => state);
  // const dispatch = useDispatch();
  const { auth } = storeState;

  return (
    <>
      {auth.isAuthenticated ? (
        <div className='relative box-border block h-[126px] w-[1440px]'>
          <div className='absolute top-0 left-0 box-border block h-[126px] w-[1440px]'>
            <div className='absolute top-0 left-0 h-[126px] w-[1440px] bg-white' />
            <div className='absolute top-0 left-0 box-border flex h-[126px] w-[1440px] items-center justify-end gap-8 px-5'>
              <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[25px] font-bold leading-[normal] text-[#2c3e50]'>
                SUPPORT POD
              </p>
              {auth.user.userRole === 1 &&
                MenuConstants.admin.map((item, index) => (
                  <NavLink
                    to={item.route}
                    key={index}
                    className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-lg leading-[normal] text-[#2c3e50]'
                  >
                    {item.title}
                  </NavLink>
                ))}
              {auth.user.userRole === 2 &&
                MenuConstants.freelancer.map((item, index) => (
                  <NavLink
                    to={item.route}
                    key={index}
                    className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-lg leading-[normal] text-[#2c3e50]'
                  >
                    {item.title}
                  </NavLink>
                ))}
              {auth.user.userRole === 3 &&
                MenuConstants.serviceManager.map((item, index) => (
                  <NavLink
                    to={item.route}
                    key={index}
                    className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-lg leading-[normal] text-[#2c3e50]'
                  >
                    {item.title}
                  </NavLink>
                ))}
              <HiOutlineBell className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-lg leading-[normal] text-[#2c3e50]' />
            </div>
            {/* <ButtonSecondary /> */}
            {/* <ButtonSecondary1 /> */}
          </div>
        </div>
      ) : (
        <div className='relative box-border block h-[126px] w-[1440px]'>
          <div className='absolute top-0 left-0 box-border block h-[126px] w-[1440px]'>
            <div className='absolute top-0 left-0 h-[126px] w-[1440px] bg-white' />
            <div className='absolute top-0 left-0 box-border flex h-[126px] w-[1440px] items-center justify-end gap-8 px-5'>
              <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[25px] font-bold leading-[normal] text-[#2c3e50]'>
                SUPPORT POD
              </p>
              <NavLink
                to={'/login'}
                className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-lg leading-[normal] text-[#2c3e50]'
              >
                Login
              </NavLink>
              <NavLink
                to={'/register'}
                className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-lg leading-[normal] text-[#2c3e50]'
              >
                Sign Up
              </NavLink>
            </div>
            <div className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-lg leading-[normal] text-[#2c3e50]'></div>

            {/* <ButtonSecondary /> */}
            {/* <ButtonSecondary1 /> */}
          </div>
        </div>
      )}
    </>
  );
}
