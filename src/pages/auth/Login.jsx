import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Section from '../../components/Section';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
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
      <div className='m-auto w-1/4 rounded-lg bg-teal p-5'>
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
        <div className='mt-5 flex justify-center text-blue'>
          <Button text='Log In' onClick={onSubmit} />
        </div>
        <p className='mt-3 text-center text-blue'>
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
