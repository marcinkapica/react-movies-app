import React from 'react';
import PropTypes from 'prop-types';

const ErrorNotification = (props) => {
  const { children } = props;
  return (
    <div className="mt-4">
      <p className="text-7xl text-center text-shamrock-500">:(</p>
      <p className="mt-8 text-xl text-center">{children}</p>
    </div>
  );
};

ErrorNotification.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ErrorNotification;
