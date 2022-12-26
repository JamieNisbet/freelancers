import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as URL from '../../utils/apiEndpoints';
import { setLoading } from '../../reducers/actions/uiActions';
import { freelancerApi, authToken } from '../../axios/index';
import TableComponent from '../../components/TableComponent';
// import { useSelector } from 'react-redux';

function Freelancers() {
  const dispatch = useDispatch();
  // const { auth } = useSelector((state) => state);
  const [state, setState] = useState({
    freelancers: [],
  });
  // Description : Fetching freelancers
  useEffect(() => {
    dispatch(setLoading(true));
    fetchFreelancers();
    dispatch(setLoading(false));
  }, []);

  const fetchFreelancers = () => {
    freelancerApi
      .get(URL.FREELANCERS, authToken)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          freelancers: res.data,
        }));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>Freelancers</h2>
      <TableComponent type='freelancers' array={state.freelancers} />
    </>
  );
}

export default Freelancers;
