import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className = '' }) => {
  return <div className={`row ${className}`}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  clasName: PropTypes.string
};

export default Row;
