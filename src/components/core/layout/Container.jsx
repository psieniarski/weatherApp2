import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  clasName: PropTypes.string
};

export default Container;
