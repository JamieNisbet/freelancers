import React from 'react';
import PropTypes from 'prop-types';

const SRListItem = ({ id, title, category, customer, createdDate, status, buttonAction }) => {
  return (
    <div className='relative box-border block h-[204px] w-[1355px] scale-75 overflow-hidden rounded-[5px] bg-[#dfe4ea]'>
      <div className='h-[99px] w-[1330px]'>
        <div className='absolute top-[15px] left-3 box-border block h-[99px] w-[1330px] overflow-hidden rounded-[20px] bg-[#2c3e50]'>
          <p className='absolute top-[34px] left-[60px] whitespace-pre-wrap text-left text-3xl font-semibold leading-[1] text-white'>
            # {id} - {title}
          </p>
          <div className='absolute top-[39px] left-[17px] box-border block h-5 w-5 overflow-hidden rounded-[100px] border-[5px] border-[#008824]' />
          <div className='h-10 w-[302px]'>
            <div className='absolute top-[29px] left-[999px] box-border block h-10 w-[302px] overflow-hidden rounded-[10px] bg-[#5e92f3]'>
              <p className='absolute top-[9px] left-[23px] whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#dfe4ea]'>
                {category}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={buttonAction()}
        className='absolute top-[135px] left-[1072px] box-border flex h-[42px] w-[252px] flex-row-reverse items-center justify-center overflow-hidden rounded-[25px] border-[3px] border-[#2c3e50]'
        style={{
          filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
        }}
      >
        <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[25px] font-semibold leading-[0] text-[#2c3e50]'>
          More Info
        </p>
      </div>
      <div className='h-[42px] w-[282px]'>
        <div className='absolute top-[135px] left-[29px] box-border flex w-[282px] items-center justify-between overflow-hidden rounded-[10px] bg-[#5e92f3] p-2.5'>
          <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#2c3e50]'>
            Customer
          </p>
          <p className='w-[168px] flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#dfe4ea]'>
            {customer}
          </p>
        </div>
      </div>
      <div className='h-[42px] w-[241px]'>
        <div className='absolute top-[135px] left-[338px] box-border flex w-[241px] items-center justify-between overflow-hidden rounded-[10px] bg-[#5e92f3] p-2.5'>
          <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#2c3e50]'>
            Date
          </p>
          <p className='w-[178px] flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#dfe4ea]'>
            {createdDate}
          </p>
        </div>
      </div>
      <div className='h-[42px] w-[295px]'>
        <div className='absolute top-[135px] left-[606px] box-border flex w-[295px] items-center justify-between overflow-hidden rounded-[10px] bg-[#5e92f3] p-2.5'>
          <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#2c3e50]'>
            Status
          </p>
          <p className='flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-center text-[22px] font-semibold leading-[1] text-[#dfe4ea]'>
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

SRListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default SRListItem;
