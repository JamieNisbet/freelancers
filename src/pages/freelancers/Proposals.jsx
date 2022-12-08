import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Proposal from '../../components/Proposal';

const Proposals = ({ srId }) => {
  const [state, setState] = useState({
    bidProposals: [],
  });

  useEffect(() => {
    fetchBidProposals();
  }, []);

  const fetchBidProposals = () => {
    axios
      .post('https://devfreelancersapi.supportpod.com/api/bidproposals/bidproposals', {
        serviceRequestId: srId,
      })
      .then((res) => {
        setState((current) => ({ ...current, bidProposals: res.data }));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {state?.bidProposals?.map((proposal, i) => (
        <Proposal key={i} proposal={proposal} />
      ))}
    </div>
  );
};

Proposals.propTypes = {
  srId: PropTypes.string.isRequired,
};

export default Proposals;
