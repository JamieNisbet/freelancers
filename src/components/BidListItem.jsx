import React from 'react';
import PropTypes from 'prop-types';

const BidListItem = ({ id, title, daysLeft, buttonAction, buttonText, status }) => {
  return (
    <div className='mx-auto mb-5 mr-5 ml-5 box-border flex h-fit w-[702px] flex-col items-start justify-start gap-2.5'>
      <div className='relative box-border flex h-[133px] w-[702px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2.5'>
        <div className='relative box-border block h-[133px] w-[702px] flex-shrink-0 flex-grow-0 overflow-hidden rounded-[5px] bg-[#dfe4ea]'>
          <div className='absolute top-[15px] left-3 box-border flex w-[690px] flex-col items-start justify-start gap-2.5'>
            <div className='relative box-border flex flex-shrink-0 flex-grow-0 items-center justify-start gap-[23px] overflow-hidden rounded-[20px] bg-[#2c3e50] py-[15px] pl-5 pr-[600px]'>
              <div
                className={
                  'relative box-border block h-5 w-5 flex-shrink-0 flex-grow-0 overflow-hidden rounded-[100px] border-[5px] ' +
                  (status !== 'closed' ? 'border-[#008824]' : 'border-[#930000]')
                }
              />
              <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-[22px] font-semibold leading-[1] text-white'>
                # {id}
              </p>
              <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-[22px] font-semibold leading-[1] text-white'>
                {title}
              </p>
              <svg
                className='relative block h-6 w-6 flex-shrink-0 flex-grow-0'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.625 12C8.625 12.2071 8.45711 12.375 8.25 12.375C8.04289 12.375 7.875 12.2071 7.875 12C7.875 11.7929 8.04289 11.625 8.25 11.625C8.45711 11.625 8.625 11.7929 8.625 12ZM8.625 12H8.25M12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12ZM12.375 12H12M16.125 12C16.125 12.2071 15.9571 12.375 15.75 12.375C15.5429 12.375 15.375 12.2071 15.375 12C15.375 11.7929 15.5429 11.625 15.75 11.625C15.9571 11.625 16.125 11.7929 16.125 12ZM16.125 12H15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
                  stroke='#DFE4EA'
                  strokeWidth={1.5}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
          <div
            onClick={buttonAction()}
            className='absolute top-[86px] left-[525px] box-border flex h-[31px] w-[166px] flex-row-reverse items-center justify-center overflow-hidden rounded-[25px] border-[3px] border-[#2c3e50]'
            style={{
              filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
            }}
          >
            <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-lg font-semibold leading-[0] text-[#2c3e50]'>
              {buttonText}
            </p>
          </div>
          {daysLeft > 0 ? (
            <div className='absolute top-20 left-[19px] box-border flex w-[489px] items-center justify-between overflow-hidden rounded-[10px] bg-[#5e92f3] px-[25px] py-2.5'>
              <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#2c3e50]'>
                Closes in
              </p>
              <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#dfe4ea]'>
                {daysLeft} days
              </p>
            </div>
          ) : (
            <div className='absolute top-20 left-[19px] box-border flex w-[489px] items-center justify-between overflow-hidden rounded-[10px] bg-[#5e92f3] px-[25px] py-2.5'>
              <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#2c3e50]'>
                Status
              </p>
              <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#dfe4ea]'>
                Closed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BidListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  daysLeft: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default BidListItem;
