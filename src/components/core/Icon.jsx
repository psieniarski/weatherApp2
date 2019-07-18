import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => {
  return <i className={`wi ${name} icon icon-xl`}></i>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
