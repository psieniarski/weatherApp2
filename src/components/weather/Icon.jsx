import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/icon.scss';

const Icon = ({ iconId }) => {
  const iconClass = iconId ? `owf-${iconId}` : '';
  return <i className={`owf ${iconClass} owf-5x`}></i>;
};

Icon.propTypes = {
  iconId: PropTypes.number.isRequired
};

export default Icon;
