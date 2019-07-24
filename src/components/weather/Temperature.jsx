import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';
import TextSymbol from '../core/TextSymbol';
import TextNumber from '../core/TextNumber';

import {
  WEATHER_TEMPERATURE_UNIT,
  WEATHER_TEMPERATURE_UNIT_ROUND_TYPE
} from '../../constants/units';

const Temperature = ({
  value,
  label,
  unit = WEATHER_TEMPERATURE_UNIT,
  round = WEATHER_TEMPERATURE_UNIT_ROUND_TYPE
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
