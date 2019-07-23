import React from 'react';
import PropTypes from 'prop-types';

import WeatherIcon from './Icon';
import Temperature from './Temperature';

import {
  WEATHER_TEMPERATURE_LABEL,
  WEATHER_TEMPERATURE_MIN_LABEL,
  WEATHER_TEMPERATURE_MAX_LABEL
} from '../../constants/labels';

const DetailsBox = ({
  icon,
  temperature,
  temperatureMin,
  temperatureMax,
  temperatureUnit,
  temperatureLabel = WEATHER_TEMPERATURE_LABEL,
  temperatureMinLabel = WEATHER_TEMPERATURE_MIN_LABEL,
  temperatureMaxLabel = WEATHER_TEMPERATURE_MAX_LABEL
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
  temperatureLabel: PropTypes.string,
  temperatureMinLabel: PropTypes.string,
  temperatureMaxLabel: PropTypes.string
};
export default DetailsBox;
