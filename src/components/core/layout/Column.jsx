import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, className }) => {
  return <div className={`column ${className}`}>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  clasName: PropTypes.string
};

export default Column;
