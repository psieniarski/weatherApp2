import React from 'react';
import PropTypes from 'prop-types';

const symbols = {
  celcius: '\u2103',
  fahrenheit: '\u2109'
};

const TextSymbol = ({ name }) => {
  return <React.Fragment> {symbols[name]} </React.Fragment>;
};

Text.propTypes = {
  name: PropTypes.oneOf(['celcius', 'fahrenheit']).isRequired
};

export default TextSymbol;
