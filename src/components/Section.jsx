import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ heading, subheading, body }) => {
  return (
    <div className='m-auto w-3/4 p-12 text-center'>
      <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-2xl'>
        {heading}
      </h1>
      <h4 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
        {subheading}
      </h4>
      <p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48'>
        {body}
      </p>
    </div>
  );
};

Section.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  body: PropTypes.string,
};

export default Section;
