import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

const UserCard = ({ url, name, role, onClick }) => {
  return (
    <div className='flex justify-center'>
      <div className='md:flex-row md:max-w-xl flex w-72 flex-col rounded-lg bg-gradient shadow-lg'>
        <img
          className='md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mx-auto mt-2 h-52 w-60 rounded-lg object-cover'
          src={url}
          alt='profile-picture'
        />
        <div className='flex flex-col justify-start p-6'>
          <h5 className='text-gray-900 mb-2 text-xl font-medium'>{name}</h5>
          <p className='text-gray-700 mb-4 text-base'>
            {role === '1' && <>Admin</>}
            {role === '2' && <>Freelancer</>}
            {role === '3' && <>Service Manager</>}
          </p>
          <Button text='View More' onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  role: PropTypes.string.isRequired,
};

export default UserCard;
