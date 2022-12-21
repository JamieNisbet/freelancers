import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Section from '../../components/Section';

import { Link } from 'react-router-dom';

import { loginUser } from '../../reducers/actions/authActions';
import { login } from '../../config/Constants';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeState = useSelector((state) => state);

  const { errors, auth } = storeState;
  console.log(auth);

  const [state, setState] = useState({
    email: '',
    password: '',
    errors: {},
    emailValidation: true,
  });

  useEffect(() => {
    setState((current) => ({ ...current, errors: errors }));
  }, [errors]);

  useEffect(() => {
    if (auth.isAuthenticated) {
      if (auth.user.isEmailVerified) {
        if (
          auth.user.userRole === 1 || // Admin
          auth.user.userRole === 4 || // Operational Manager
          auth.user.userRole === 5 // Resourcer
        ) {
          navigate('/freelancers');
        } else if (auth.user.userRole === 3) {
          // Service manager
          navigate('/service-requests');
        } else if (auth.user.userRole === 2 && auth.user.isActive === true) {
          navigate('/all-bids');
        } else {
          navigate('/dashboard');
        }
      }
    }
  }, [auth]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password,
    };
    dispatch(loginUser(userData));
  };

  return (
    <div className='bg-blue pt-5 pb-40'>
      <div className='mt-4 mb-4'>
        <Section heading={login.title} subheading={login.tagline} body={login.body} />
      </div>
      <div className='bg-teal m-auto w-1/4 rounded-lg p-5'>
        <form>
          <input
            value={state.email}
            onChange={(e) => setState((current) => ({ ...current, email: e.target.value }))}
            className='mt-3'
            type='email'
            name='email'
            placeholder='example@mail.com'
            label='Email'
          />
          <input
            value={state.password}
            onChange={(e) => setState((current) => ({ ...current, password: e.target.value }))}
            className='mt-3'
            type='password'
            name='password'
            placeholder='*****'
            label='Password'
          />
        </form>
        <div className='mt-5 flex justify-center text-white'>
          <button onClick={onSubmit}>Log In</button>
        </div>
        <p className='text-blue mt-3 text-center'>
          Not registered yet?{' '}
          <Link to='/register' className='text-blue-600 dark:text-blue-500 hover:underline'>
            Click Here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
