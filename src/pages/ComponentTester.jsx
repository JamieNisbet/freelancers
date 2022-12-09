import React from 'react';
import Button from '../components/Button';
import User from '../images/user.jpg';
import toast from 'react-hot-toast';
import Notification from '../components/Notification';
import UserCard from '../components/UserCard';

const ComponentTester = () => {
  return (
    <>
      <Button text='Press Me' onClick={() => toast.success('Success')} />
      <Notification image={User} title='Hello' message='World' altText='image' />
      <UserCard url={User} name='John Smith' role='1' onClick={() => toast.success('Success')} />
    </>
  );
};

export default ComponentTester;
