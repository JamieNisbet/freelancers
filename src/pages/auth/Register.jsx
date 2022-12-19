import React, { useState } from 'react';
import Section from '../../components/Section';
import Input from '../../components/Input';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { welcome } from '../../config/Constants';

const Register = () => {
  const [state, setState] = useState({
    termsConditions: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onSubmit = () => {
    const { firstname, lastname, email, password, passwordConfirm, termsConditions } = state;
    console.table([termsConditions, firstname, lastname, email, password, passwordConfirm]);
    toast.success('User Registered');
    toast.success('Check your inbox to verify your account');
    setState(() => ({
      termsConditions: false,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }));
  };

  return (
    <div className='inline-flex items-center bg-blue pt-16 pb-16'>
      <div className='mt-4 mb-4 w-2/5'>
        <Section heading={welcome.title} subheading={welcome.tagline} body={welcome.body} />
      </div>
      <div className='m-auto w-1/4 rounded-lg bg-teal p-5'>
        <Input
          value={state.firstname}
          onChange={(e) => setState((current) => ({ ...current, firstname: e.target.value }))}
          className='mt-3'
          type='text'
          name='firstname'
          placeholder='John'
          label='First Name'
        />
        <Input
          value={state.lastname}
          onChange={(e) => setState((current) => ({ ...current, lastname: e.target.value }))}
          className='mt-3'
          type='text'
          name='lastname'
          placeholder='Smith'
          label='Last Name'
        />
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
        <Input
          value={state.passwordConfirm}
          onChange={(e) => setState((current) => ({ ...current, passwordConfirm: e.target.value }))}
          className='mt-3'
          type='password'
          name='passwordConfirm'
          placeholder='*****'
          label='Confirm Password'
        />
        <div className='mt-2 inline-flex'>
          <Input
            id='remember'
            type='checkbox'
            onChange={() =>
              setState((current) => ({ ...current, termsConditions: !current.termsConditions }))
            }
            value={state.termsConditions}
            className='focus:ring-3 font-lg focus:ring-blue-300 '
            required
          />
        </div>
        <label htmlFor='remember' className='ml-2 inline-flex text-lg text-gradient'>
          <p>
            I agree with the{' '}
            <a href='#' className='text-blue hover:underline'>
              terms and conditions
            </a>
          </p>
        </label>

        <div className='mt-5 flex justify-center text-blue'>
          <Button text='Sign Up' onClick={onSubmit} />
        </div>
        <p className='mt-3 text-center text-blue'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-600 dark:text-blue-500 hover:underline'>
            Click Here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
