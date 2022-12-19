import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ image, title, message, altText }) => {
  return (
    <div className='mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-md'>
      <div className='shrink-0'>
        <img className='h-12 w-12' src={image} alt={altText} />
      </div>
      <div>
        <div className='text-black text-xl font-medium'>{title}</div>
        <p className='text-slate-500'>{message}</p>
      </div>
    </div>
  );
};

Notification.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Notification;
