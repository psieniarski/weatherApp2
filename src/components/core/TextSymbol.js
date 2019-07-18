import React from 'react';
import PropTypes from 'prop-types';

const symbols = {
  degree: '\u00B0',
  degreeCelcius: '\u2103',
  degreeFahrenheit: '\u2109'
};

const TextSymbol = ({ name }) => {
  return <React.Fragment>{symbols[name]} </React.Fragment>;
};

Text.propTypes = {
  size: PropTypes.oneOf(['degree', 'degreeCelcius', 'degreeFahrenheit'])
    .isRequired
};

export default TextSymbol;
