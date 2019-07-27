import React from 'react';
import { useSelector } from 'react-redux';
import WeatherIcon from '../components/weather/Icon';
import Temperature from '../components/weather/Temperature';
import SearchContainer from '../containers/SearchContainer';

import {
  WEATHER_TEMPERATURE_LABEL,
  WEATHER_TEMPERATURE_MIN_LABEL,
  WEATHER_TEMPERATURE_MAX_LABEL
} from '../constants/labels';

const Base = () => {
  return (
    <React.Fragment>
      <SearchContainer />
      <WeatherIcon name={useSelector(state => state.weather.icon)} size="xl" />
      <Temperature
        value={useSelector(state => state.weather.temperature)}
        label={WEATHER_TEMPERATURE_LABEL}
      />
      <Temperature
        value={useSelector(state => state.weather.temperatureMax)}
        label={WEATHER_TEMPERATURE_MAX_LABEL}
      />
      <Temperature
        value={useSelector(state => state.weather.temperatureMin)}
        label={WEATHER_TEMPERATURE_MIN_LABEL}
      />
    </React.Fragment>
  );
};

export default Base;
