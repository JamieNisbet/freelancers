import React, { useState } from 'react';
import Section from '../../components/Section';
import Input from '../../components/Input';
import toast from 'react-hot-toast';
import Switch from '../../components/Switch';
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
    <div className='mt-12 mb-60'>
      <div className='mt-4 mb-4'>
        <Section heading={welcome.title} subheading={welcome.tagline} body={welcome.body} />
      </div>
      <div className='m-auto w-1/4 rounded-lg bg-teal-500 p-5'>
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
        <Switch
          active={state.termsConditions}
          onSwitch={() =>
            setState((current) => ({ ...current, termsConditions: !current.termsConditions }))
          }
          label='I agree with the terms and conditions'
        />

        <div className='mt-5 flex justify-center'>
          <Button text='Sign Up' onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Register;
