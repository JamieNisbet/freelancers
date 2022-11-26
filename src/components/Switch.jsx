import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ active, onSwitch, label, ...rest }) => {
  return (
    <div className='m-3 flex justify-center'>
      <label className='relative mr-5 inline-flex cursor-pointer items-center'>
        <input
          {...rest}
          type='checkbox'
          className='peer sr-only'
          onChange={onSwitch}
          checked={active}
        />
        <div className="peer h-6 w-11 rounded-full bg-gray-200  after:absolute  after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
        <span className='ml-2'>{label}</span>
      </label>
    </div>
  );
};

Switch.propTypes = {
  active: PropTypes.bool.isRequired,
  onSwitch: PropTypes.func,
  label: PropTypes.string,
};

export default Switch;
