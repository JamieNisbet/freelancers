import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { isSameDay } from '../utils/dates';

const MessageComponent = ({ message }) => {
  return (
    <ul>
      <li>
        <button onClick={() => console.log('action')}>{message.message}</button>
      </li>
      {isSameDay(new Date(), message.createdDate) ? (
        <li>{new Date(message.createdDate).toLocaleTimeString()}</li>
      ) : (
        <li>
          {moment(
            new Date(
              new Date(message.createdDate).setHours(new Date(message.createdDate).getHours()),
            )
              .toISOString()
              .replace(/T/, ' ')
              .replace(/\..+/, ''),
          ).format(' L')}
        </li>
      )}
    </ul>
  );
};

MessageComponent.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageComponent;
