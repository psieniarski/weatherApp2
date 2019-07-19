import React from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';

import Container from '../components/core/layout/Container';
import SearchBox from '../components/weather/SearchBox';
import DetailsBox from '../components/weather/DetailsBox';

const WeatherContainer = ({
  temperatureUnit,
  temperatureLabel,
  temperatureMinLabel,
  temperatureMaxLabel
}) => {
  const dispatch = useDispatch();
  const onQueryChange = ({ q }) => {
    dispatch(fetchWeatherData({ q, temperatureUnit }));
  };
  const temperature = useSelector(state => state.weather.temperature);
  const temperatureMin = useSelector(state => state.weather.temperatureMin);
  const temperatureMax = useSelector(state => state.weather.temperatureMax);
  const icon = useSelector(state => state.weather.icon);
  const name = useSelector(state => state.weather.name);

  return (
    <Container>
      <SearchBox
        name={name}
        placeholder="City"
        onChange={event => {
          onQueryChange({ q: event.target.value });
        }}
      ></SearchBox>
      <DetailsBox
        icon={icon}
        temperature={temperature}
        temperatureMin={temperatureMin}
        temperatureMax={temperatureMax}
        temperatureUnit={temperatureUnit}
        temperatureLabel={temperatureLabel}
        temperatureMinLabel={temperatureMinLabel}
        temperatureMaxLabel={temperatureMaxLabel}
      />
    </Container>
  );
};

WeatherContainer.propTypes = {
  temperatureUnit: PropTypes.oneOf(['celcius', 'fahrenheit']),
  temperatureLabel: PropTypes.string.isRequired,
  temperatureMinLabel: PropTypes.string.isRequired,
  temperatureMaxLabel: PropTypes.string.isRequired
};

export default WeatherContainer;
