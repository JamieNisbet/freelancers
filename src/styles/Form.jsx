import React from 'react';

const Form = () => {
  return (
    <div className='bg-gray-300 flex flex-col items-center justify-center'>
      <div className='flex w-full max-w-md flex-col rounded-md bg-white px-4 py-8 shadow-md sm:px-6 md:px-8 lg:px-10'>
        <div className='text-gray-800 self-center text-xl font-medium uppercase sm:text-2xl'>
          Login To Your Account
        </div>
        <button
          //   onClick={actionOne}
          className='text-gray-800 bg-gray-100 hover:bg-gray-200 relative mt-6 rounded-md border py-2 text-sm'
        >
          <span className='text-blue-500 absolute left-0 top-0 flex h-full w-10 items-center justify-center'>
            <i className='fab fa-facebook-f'></i>
          </span>
          <span>Login with Facebook</span>
        </button>
        <div className='bg-gray-300 relative mt-10 h-px'>
          <div className='absolute left-0 top-0 -mt-2 flex w-full justify-center'>
            <span className='text-gray-500 bg-white px-4 text-xs uppercase'>
              Or Login With Email
            </span>
          </div>
        </div>
        <div className='mt-10'>
          <form action='#'>
            <div className='mb-6 flex flex-col'>
              <label
                htmlFor='email'
                className='text-gray-600 mb-1 text-xs tracking-wide sm:text-sm'
              >
                E-Mail Address:
              </label>
              <div className='relative'>
                <div className='text-gray-400 absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center'>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
                  </svg>
                </div>

                <input
                  id='email'
                  type='email'
                  name='email'
                  className='placeholder-gray-500 border-gray-400 focus:border-blue-400 w-full rounded-lg border py-2 pl-10 pr-4 text-sm focus:outline-none sm:text-base'
                  placeholder='E-Mail Address'
                />
              </div>
            </div>
            <div className='mb-6 flex flex-col'>
              <label
                htmlFor='password'
                className='text-gray-600 mb-1 text-xs tracking-wide sm:text-sm'
              >
                Password:
              </label>
              <div className='relative'>
                <div className='text-gray-400 absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center'>
                  <span>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                    </svg>
                  </span>
                </div>

                <input
                  id='password'
                  type='password'
                  name='password'
                  className='placeholder-gray-500 border-gray-400 focus:border-blue-400 w-full rounded-lg border py-2 pl-10 pr-4 text-sm focus:outline-none sm:text-base'
                  placeholder='Password'
                />
              </div>
            </div>

            <div className='mb-6 -mt-4 flex items-center'>
              <div className='ml-auto flex'>
                <a
                  href='#'
                  className='text-blue-500 hover:text-blue-700 inline-flex text-xs sm:text-sm'
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>

            <div className='flex w-full'>
              <button
                type='submit'
                // onSubmit={actionTwo}
                className='bg-blue-600 hover:bg-blue-700 text-black flex w-full items-center justify-center rounded py-2 text-sm transition duration-150 ease-in focus:outline-none sm:text-base'
              >
                <span className='mr-2 uppercase'>Login</span>
                <span>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className='mt-6 flex items-center justify-center'>
          <a
            href='#'
            target='_blank'
            className='text-blue-500 hover:text-blue-700 inline-flex items-center text-center text-xs font-bold'
          >
            <span>
              <svg
                className='h-6 w-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' />
              </svg>
            </span>
            <span className='ml-2'>You dont have an account?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
