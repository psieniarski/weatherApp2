import React from 'react';
import { useSelector } from 'react-redux';
import WeatherIcon from '../components/weather/Icon';
import Temperature from '../components/weather/Temperature';
import SearchContainer from '../containers/SearchContainer';
import LoaderContainer from '../containers/LoaderContainer';
import {
  WEATHER_TEMPERATURE_LABEL,
  WEATHER_TEMPERATURE_MIN_LABEL,
  WEATHER_TEMPERATURE_MAX_LABEL
} from '../constants/labels';

const Base = () => {
  const isFetching = useSelector(state => state.weather.isFetching);
  return (
    <React.Fragment>
      <LoaderContainer show={isFetching} />
      <SearchContainer />
      <WeatherIcon iconId={useSelector(state => state.weather.iconId)} />
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
