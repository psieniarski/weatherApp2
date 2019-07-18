import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children }) => {
  return <div className="column">{children}</div>;
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Column;
