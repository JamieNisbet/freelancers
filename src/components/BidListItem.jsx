import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BidListItem = ({ item }) => {
  const calDaysLeft = (endDate) => {
    var dateFuture = new Date(endDate);
    var dateNow = new Date();

    var seconds = Math.floor((dateFuture - dateNow) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    return days;
  };
  return (
    <NavLink
      to={`/bid-request?id=${item.serviceRequestId}`}
      className='relative mt-2 box-border block h-[161px] w-[986px] flex-shrink-0 flex-grow-0 overflow-hidden rounded-[20px] bg-[#babec2]'
    >
      <div className='absolute top-0 left-0 box-border flex h-[60px] w-[986px] items-center justify-start gap-5 overflow-hidden px-5'>
        <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-xl font-semibold leading-[1.4] text-[#2c3e50]'>
          {item.serviceRequestId}
        </p>
        <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-xl font-semibold leading-[1.4] text-[#2c3e50]'>
          {item.title}
        </p>
        {calDaysLeft(item.endDate) > 0 ? (
          <div className='relative box-border flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2.5 overflow-hidden rounded-[10px] bg-[#5e92f3] px-2.5 py-0.5'>
            <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-sm font-semibold leading-[1.4] text-[#2c3e50]'>
              Closes in {calDaysLeft(item.endDate)} days
            </p>
          </div>
        ) : null}

        <div
          className={`relative box-border flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2.5 overflow-hidden rounded-[10px] ${
            item.status === 'closed' ? 'bg-error' : 'bg-success'
          } px-2.5 py-0.5`}
        >
          <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-sm font-semibold leading-[1.4] text-[#2c3e50]'>
            {item.status}
          </p>
        </div>
      </div>
      <div className='absolute top-[101px] left-[3px] box-border flex h-[60px] w-[357px] items-center justify-start gap-2.5 px-5'>
        {item.skills.map((skill, i) => (
          <div
            key={i}
            className='relative box-border flex flex-shrink-0 flex-grow-0 items-start justify-start gap-2.5 rounded-[10px] bg-[#5e92f3] px-2.5 py-0.5'
          >
            <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-sm font-semibold leading-[1.4] text-[#2c3e50]'>
              {skill}
            </p>
          </div>
        ))}
      </div>
    </NavLink>
  );
};

BidListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BidListItem;
