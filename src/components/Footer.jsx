import React from 'react';

const Footer = () => {
  return (
    <footer className='md:p-6 fixed bottom-0 left-0 z-20 flex inline-flex w-full items-center justify-between border-t bg-navy p-4 text-center shadow'>
      <span className='dark:text-gray-400 text-center text-sm text-gradient'>
        © 2022{' '}
        <a href='https://flowbite.com/' className='hover:underline'>
          SupportPod
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
