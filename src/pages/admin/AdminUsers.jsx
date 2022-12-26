import React, { useState, useEffect } from 'react';
import { freelancerApi, authToken } from '../../axios/index';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as URL from '../../utils/apiEndpoints';
import TableComponent from '../../components/TableComponent';

const AdminUsers = () => {
  const { auth } = useSelector((state) => state);
  const [state, setState] = useState({
    loading: false,
    adminUsers: [],
  });

  const fetchUsers = () => {
    if (auth.user.userRole === 1 || auth.user.userRole === 4) {
      freelancerApi
        .get(URL.ADMIN_USERS, authToken)
        .then((res) => {
          setState((prev) => ({
            ...prev,
            adminUsers: res.data,
          }));
        })
        .catch((err) => console.log(err));
    } else {
      history.push('/dashboard');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Admin Users</h2>
      <NavLink to={'/create-user'}>Create New User</NavLink>
      <TableComponent type='adminUsers' array={state.adminUsers} />
    </div>
  );
};

export default AdminUsers;
