import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Section from '../../components/Section';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { loginUser } from '../../reducers/actions/authActions';
import { login } from '../../config/Constants';

const Login = () => {
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state);

  const { errors, auth } = storeState;
  console.error(errors);
  console.log(auth);

  const [state, setState] = useState({
    email: '',
    password: '',
    errors: {},
  });

  useEffect(() => {
    setState((current) => ({ ...current, errors: errors }));
  }, [errors]);

  useEffect(() => {
    if (auth.isAuthenticated) {
      return ;
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
    <div className='mt-12 mb-60'>
      {auth.isAuthenticated && (<Navigate replace to='/freelancers'/>)}
      <div className='mt-4 mb-4'>
        <Section heading={login.title} subheading={login.tagline} body={login.body} />
      </div>
      <div className='m-auto w-1/4 rounded-lg bg-teal-500 p-5'>
        <form>
          <Input
            value={state.email}
            onChange={(e) => setState((current) => ({ ...current, email: e.target.value }))}
            className='mt-3'
            type='email'
            name='email'
            placeholder='example@mail.com'
            label='Email'
          />
          <Input
            value={state.password}
            onChange={(e) => setState((current) => ({ ...current, password: e.target.value }))}
            className='mt-3'
            type='password'
            name='password'
            placeholder='*****'
            label='Password'
          />
        </form>
        <div className='mt-5 flex justify-center'>
          <Button text='Log In' onClick={onSubmit} />
        </div>
        <p className='mt-3 text-center'>
          Not registered yet?{' '}
          <a href='/register' className='text-blue-600 hover:underline dark:text-blue-500'>
            Click Here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
