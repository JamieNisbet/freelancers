import React from 'react';

const Loading = () => {
  return (
    <div
      id='loading-screen'
      className='fixed top-0 left-0 z-50 block hidden h-full w-full bg-white opacity-75'
    >
      <span className='text-green-500 relative top-1/2 my-0 mx-auto block h-0 w-0 opacity-75'>
        <i className='fas fa-circle-notch fa-spin fa-5x'></i>
      </span>
    </div>
  );
};

export default Loading;
