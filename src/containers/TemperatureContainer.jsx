import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import WeatherIcon from '../components/weather/Icon';
import Temperature from '../components/weather/Temperature';

import {
  WEATHER_TEMPERATURE_LABEL,
  WEATHER_TEMPERATURE_MIN_LABEL,
  WEATHER_TEMPERATURE_MAX_LABEL
} from '../constants/labels';

const TemperatureContainer = ({
  temperatureUnit,
  temperatureLabel = WEATHER_TEMPERATURE_LABEL,
  temperatureMaxLabel = WEATHER_TEMPERATURE_MAX_LABEL,
  temperatureMinLabel = WEATHER_TEMPERATURE_MIN_LABEL
}) => {
  const temperature = useSelector(state => state.weather.temperature);
  const temperatureMin = useSelector(state => state.weather.temperatureMin);
  const temperatureMax = useSelector(state => state.weather.temperatureMax);
  const icon = useSelector(state => state.weather.icon);

  return (
    <React.Fragment>
      <WeatherIcon name={icon} size="xl" />
      <Temperature
        value={temperature}
        label={temperatureLabel}
        unit={temperatureUnit}
      />
      <Temperature
        value={temperatureMax}
        label={temperatureMaxLabel}
        unit={temperatureUnit}
      />
      <Temperature
        value={temperatureMin}
        label={temperatureMinLabel}
        unit={temperatureUnit}
      />
    </React.Fragment>
  );
};

TemperatureContainer.propTypes = {
  temperatureUnit: PropTypes.oneOf(['celcius', 'fahrenheit'])
};

export default TemperatureContainer;
