import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WeatherContainer from '../containers/TemperatureContainer';
import SearchContainer from '../containers/SearchContainer';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';

const City = ({ name }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherData({ q: name }));
  });
  return (
    <React.Fragment>
      <SearchContainer />
      <WeatherContainer />
    </React.Fragment>
  );
};

City.propTypes = {
  name: PropTypes.string
};

export default City;
