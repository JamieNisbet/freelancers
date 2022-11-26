import React from 'react';

const Footer = () => {
  return (
    <div className='mt-20 bg-gray-50 dark:bg-gray-800'>
      <div className='mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5'>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
              Company
            </h2>
            <ul className='text-gray-500 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='/' className=' hover:underline'>
                  About
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Careers
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Brand Center
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
              Help center
            </h2>
            <ul className='text-gray-500 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Discord Server
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Twitter
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Facebook
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
              Legal
            </h2>
            <ul className='text-gray-500 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Licensing
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
              Company
            </h2>
            <ul className='text-gray-500 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='/' className=' hover:underline'>
                  About
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Careers
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Brand Center
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
              Download
            </h2>
            <ul className='text-gray-500 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  iOS
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Android
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  Windows
                </a>
              </li>
              <li className='mb-4'>
                <a href='/' className='hover:underline'>
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <div className='text-center'>
          <a
            href='/'
            className='mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white'
          >
            Apoyar
          </a>
          <span className='block text-center text-sm text-gray-500 dark:text-gray-400'>
            © {new Date().getFullYear()}{' '}
            <a
              href='https://apoyar.eu'
              target='_blank'
              rel='noreferrer'
              className='hover:underline'
            >
              Apoyar
            </a>
            . All Rights Reserved.
          </span>
          <ul className='mt-5 flex justify-center space-x-5'>
            <li>
              <a
                href='/'
                className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              ></a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              ></a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              ></a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              ></a>
            </li>
            <li>
              <a
                href='/'
                className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
