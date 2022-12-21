import React from 'react';
import PropTypes from 'prop-types';

import BidListItem from './BidListItem';

const Table = ({ data }) => {
  return (
    <div>
      {data.length !== 0
        ? data.map((bid, idx) => <BidListItem key={idx} item={bid} />)
        : 'No available data'}
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
