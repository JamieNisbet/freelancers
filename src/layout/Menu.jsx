import React from 'react';
import MenuItem from '../components/MenuItem';
import { useSelector } from 'react-redux';
import { MenuConstants } from '../config/routes';

export const Menu = () => {
  const storeState = useSelector((state) => state);
  const { auth } = storeState;

  //   const [state, setState] = useState({
  //     notifications: [],
  //     showNotifications: false,
  //     unreadCount: 0,
  //     isOpen: {},
  //     unreadMessages: [],
  //     unreadMessagesCount: 0,
  //     showMessages: false,
  //   });

  return (
    <>
      {auth.isAuthenticated && auth.user.isEmailVerified && (
        <>
          {MenuConstants.map((link, i) => (
            <MenuItem
              className='lg:inline-block lg:mt-0 text-teal-200 mt-4 mr-4 block hover:text-white'
              key={i}
              to={link.route}
              text={link.name}
              permission={link.permissions}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Menu;
