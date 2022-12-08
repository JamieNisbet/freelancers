import React from 'react';
import PropTypes from 'prop-types';

const Proposal = ({ proposal }) => {
  return (
    <div>
      <p>status: {proposal.status}</p>
    </div>
  );
};

Proposal.propTypes = {
  proposal: PropTypes.object.isRequired,
};

export default Proposal;
