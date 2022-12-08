import React from 'react';
import PropTypes from 'prop-types';
import Proposals from '../pages/freelancers/Proposals';

const Bid = ({ bid }) => {
  return (
    <div>
      <p>ID: {bid.serviceRequestId}</p>
      <Proposals srId={bid.serviceRequestId} />
    </div>
  );
};

Bid.propTypes = {
  bid: PropTypes.object.isRequired,
};

export default Bid;
