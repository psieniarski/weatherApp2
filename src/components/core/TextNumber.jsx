import React from 'react';
import PropTypes from 'prop-types';

const roundMethods = {
  floor: Math.floor,
  ceil: Math.ceil
};

const TextNumber = ({ number, round }) => {
  return (
    <React.Fragment>
      {round ? roundMethods[round].call(Math, number) : number}
    </React.Fragment>
  );
};

Text.propTypes = {
  number: PropTypes.number.isRequired,
  round: PropTypes.oneOf(['floor', 'ceil'])
};

export default TextNumber;
