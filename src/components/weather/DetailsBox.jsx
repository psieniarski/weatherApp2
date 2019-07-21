import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';
import TextSymbol from '../core/TextSymbol';
import TextNumber from '../core/TextNumber';

import WeatherIcon from './Icon';
import Temperature from './Temperature';

const DetailsBox = ({
  icon,
  temperature,
  temperatureMin,
  temperatureMax,
  temperatureUnit,
  temperatureLabel,
  temperatureMinLabel,
  temperatureMaxLabel
}) => {
  return (
    <React.Fragment>
      <p>
        <WeatherIcon name={icon} size="xl" />
      </p>
      <p>
        <Temperature
          value={temperature}
          label={temperatureLabel}
          unit={temperatureUnit}
        />
      </p>
      <p>
        <Temperature
          value={temperatureMax}
          label={temperatureMaxLabel}
          unit={temperatureUnit}
        />
      </p>
      <p>
        <Temperature
          value={temperatureMin}
          label={temperatureMinLabel}
          unit={temperatureUnit}
        />
      </p>
    </React.Fragment>
  );
};

DetailsBox.propTypes = {
  icon: PropTypes.string,
  temperature: PropTypes.number.isRequired,
  temperatureMin: PropTypes.number.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  temperatureUnit: PropTypes.string.isRequired,
  temperatureLabel: PropTypes.string.isRequired,
  temperatureMinLabel: PropTypes.string.isRequired,
  temperatureMaxLabel: PropTypes.string.isRequired
};
export default DetailsBox;
