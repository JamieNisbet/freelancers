import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { freelancerApi, authToken } from '../../axios';
import * as URL from '../../utils/apiEndpoints';

const Bid = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get('id');
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    freelancerApi
      .post(URL.BID_DETAILS, { bidrequestid: id }, authToken)
      .then((res) => {
        const bidDetails = res.data;
        setDetails(bidDetails);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>{details.serviceRequestId}</div>
      <div>{details.title}</div>
      <div>{details.description}</div>
      <div>{details.customerEmail}</div>
    </>
  );
};

export default Bid;
