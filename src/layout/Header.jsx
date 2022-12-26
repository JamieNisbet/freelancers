import React from 'react'
import { MenuConstants } from '../config/routes'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { HiOutlineBell } from 'react-icons/hi';
// import { BiUserCircle } from 'react-icons/bi';

const Header = () => {
  const storeState = useSelector((state) => state)
  const { auth } = storeState
  const { freelancer, admin, serviceManager, unauthenticated } = MenuConstants
  return (
    <div
      className='
      from-pink-300
      via-purple-300
      to-indigo-400
      bg-gradient-to-r
      antialiased
    '
    >
      <header>
        <nav
          className='
          text-gray-700 flex
          w-full
          flex-wrap
          items-center
          justify-between
          bg-secondary
          py-4
          px-4 text-lg
          md:py-0
        '
        >
          <div>
            <a href='#'>SUPPORT POD</a>
          </div>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='menu-button'
            className='block h-6 w-6 cursor-pointer md:hidden'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>

          <div className='hidden w-full md:flex md:w-auto md:items-center' id='menu'>
            <ul
              className='
              text-gray-700
              pt-4 text-base
              md:flex
              md:justify-between 
              md:pt-0'
            >
              {auth.user.userRole === 1 &&
                admin.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.route} className='block py-2 hover:underline md:p-4'>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              {auth.user.userRole === 2 &&
                freelancer.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.route} className='block py-2 hover:underline md:p-4'>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              {auth.user.userRole === 3 &&
                serviceManager.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.route} className='block py-2 hover:underline md:p-4'>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              {!auth.isAuthenticated &&
                unauthenticated.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.route} className='block py-2 hover:underline md:p-4'>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
