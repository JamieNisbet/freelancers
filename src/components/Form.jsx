import React from 'react';
import Input from './Input';
import Button from './Button';
import Switch from './Switch';
import PropTypes from 'prop-types';

const Form = ({ buttonOne, buttonTwo, actionOne, actionTwo }) => {
  return (
    <>
      <form>
        <div className='mb-6 grid gap-6 md:grid-cols-2'>
          <Input type='text' name='firstName' placeholder='John' label='First Name' />
          <Input type='text' name='lastName' placeholder='Smith' label='Last Name' />
          <Input type='text' name='company' placeholder='Apoyar' label='Company' />
          <Input type='tel' name='phone' placeholder='123-45-678' label='Phone' />
          <Input type='url' name='website' placeholder='example.com' label='Website' />
          <Input type='number' name='budget' placeholder='10000' label='Budget' />
        </div>
        <div className='mb-6'>
          <Input type='email' name='email' placeholder='john@smith.com' label='Email' />
        </div>
        <div className='mb-6'>
          <Input type='password' name='password' placeholder='*********' label='Password' />
        </div>
        <div className='mb-6'>
          <Input
            type='password'
            name='confirmPassword'
            placeholder='*********'
            label='Confirm Password'
          />
        </div>
        <div className='mb-6 flex items-start'>
          <div className='flex h-5 items-center'>
            <Switch
              label={
                <p>
                  I agree with the{' '}
                  <a
                    href='https://google.com'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    terms and conditions
                  </a>
                </p>
              }
            />
          </div>
        </div>
        <Button text={buttonOne} onClick={actionOne} />
        <Button text={buttonTwo} onClicl={actionTwo} />
      </form>
    </>
  );
};

Form.propTypes = {
  buttonOne: PropTypes.string.isRequired,
  buttonTwo: PropTypes.string,
  actionOne: PropTypes.func.isRequired,
  actionTwo: PropTypes.func,
};

export default Form;
