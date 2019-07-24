import React from 'react';
import SearchBox from '../components/weather/SearchBox';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';

const SearchContainer = ({ temperatureUnit = 'celcius' }) => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.weather.name);

  return (
    <SearchBox
      name={name}
      placeholder="City"
      onChange={event => {
        dispatch(fetchWeatherData({ q: event.target.value, temperatureUnit }));
      }}
    ></SearchBox>
  );
};

export default SearchContainer;
