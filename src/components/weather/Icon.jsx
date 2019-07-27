import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/icon.scss';

const Icon = ({ name, size }) => {
  return <i className={`wi ${name} icon icon-${size}`}></i>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'lg', 'xl'])
};

export default Icon;
