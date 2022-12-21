import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const FilterBar = ({ title, options, filterFunc }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => setDisplay(!display);

  return (
    <>
      {display ? (
        <div className='relative box-border block h-[156px] w-[324px]'>
          <div className='absolute top-3 left-0 box-border flex w-[324px] flex-col items-start justify-center gap-2.5 overflow-hidden rounded-[25px] bg-[#babec2] px-5 py-2.5'>
            <div
              onClick={() => handleDisplay()}
              className='relative box-border block h-8 flex-shrink-0 flex-grow-0 self-stretch overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-[#2c3e50]'
            >
              <IoIosArrowUp />
              <p className='text-black absolute top-0 left-0 h-8 w-[284px] whitespace-pre-wrap text-center text-sm font-bold capitalize leading-[1.4] tracking-[-0.01em]'>
                {title}
              </p>
            </div>
            {options.map((option, i) => (
              <div
                key={i}
                onClick={() => filterFunc({ type: title.toLowerCase(), value: option })}
                className='relative box-border flex h-[30px] flex-shrink-0 flex-grow-0 flex-col items-start justify-center self-stretch overflow-hidden p-[5px]'
              >
                <p className='text-black flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-sm font-bold capitalize leading-[1.4] tracking-[-0.01em]'>
                  {option}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='relative box-border block h-[156px] w-[324px]'>
          <div className='absolute top-3 left-0 box-border flex w-[324px] flex-col items-start justify-center gap-2.5 overflow-hidden rounded-[25px] bg-[#babec2] px-5 py-2.5'>
            <div
              onClick={() => handleDisplay()}
              className='relative box-border block h-8 flex-shrink-0 flex-grow-0 self-stretch overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-[#2c3e50]'
            >
              <IoIosArrowDown />
              <p className='text-black absolute top-0 left-0 h-8 w-[284px] whitespace-pre-wrap text-center text-sm font-bold capitalize leading-[1.4] tracking-[-0.01em]'>
                {title}
              </p>
            </div>
            <div className='relative box-border flex h-[30px] flex-shrink-0 flex-grow-0 flex-col items-start justify-center self-stretch overflow-hidden p-[5px]'>
              <p className='text-black flex-shrink-0 flex-grow-0 whitespace-pre-wrap text-left text-sm font-bold capitalize leading-[1.4] tracking-[-0.01em]'></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

FilterBar.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  filterFunc: PropTypes.func.isRequired,
};

export default FilterBar;
