import React, { useState } from 'react';
import Section from '../../components/Section';
import Input from '../../components/Input';
import Button from '../../components/Button';
import toast from 'react-hot-toast';
import { freelancerApi } from '../../axios/index';
import { login } from '../../config/Constants';
import * as URL from '../../utils/apiEndpoints';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    const { email, password } = state;

    freelancerApi
      .post(URL.LOGIN, { email, password })
      .then((res) => toast.success('Success', res.status))
      .catch((err) => toast.error('Error', err));
  };
  return (
    <div className='mt-12 mb-60'>
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
