import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Bid from '../../components/Bid';

const Bids = () => {
  const [state, setState] = useState({
    bidsList: [],
  });

  useEffect(() => {
    fetchBids();
  }, []);

  const fetchBids = () => {
    axios.get('https://devfreelancersapi.supportpod.com/api/bids/bids').then((res) => {
      setState((current) => ({ ...current, bidsList: res.data }));
    });
  };
  return (
    <div>
      {state?.bidsList?.map((bid, i) => (
        <Bid key={i} bid={bid} />
      ))}
    </div>
  );
};

export default Bids;
