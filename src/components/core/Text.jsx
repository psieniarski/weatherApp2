import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => {
  return <React.Fragment>{text}</React.Fragment>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text;
