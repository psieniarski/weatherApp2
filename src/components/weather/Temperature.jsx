import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';
import TextSymbol from '../core/TextSymbol';
import TextNumber from '../core/TextNumber';

import { WEATHER_TEMPERATURE_UNIT } from '../../constants/units';

const Temperature = ({
  value,
  label,
  unit = WEATHER_TEMPERATURE_UNIT,
  round = 'floor'
}) => {
  return (
    <React.Fragment>
      <Text text={label} />
      <span>: </span>
      <strong>
        <TextNumber number={value} round={round} />
        <TextSymbol name={unit} />
      </strong>
    </React.Fragment>
  );
};

Temperature.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string,
  unit: PropTypes.string,
  round: PropTypes.oneOf(['floor', 'ceil'])
};
export default Temperature;
