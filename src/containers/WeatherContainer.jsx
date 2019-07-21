import React from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';

import Column from '../components/core/layout/Column';
import Row from '../components/core/layout/Row';

import Container from '../components/core/layout/Container';
import SearchBox from '../components/weather/SearchBox';
import DetailsBox from '../components/weather/DetailsBox';

const WeatherContainer = ({
  temperatureUnit,
  temperatureLabel,
  temperatureMinLabel,
  temperatureMaxLabel,
  noResultsLabel,
  resultsLabel
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
      <Row>
        <h1>WeatherApp</h1>
      </Row>
      <Row>
        <Column className="column-33">
          <SearchBox
            name={name}
            placeholder="City"
            noResultsLabel={noResultsLabel}
            resultsLabel={resultsLabel}
            onChange={event => {
              onQueryChange({ q: event.target.value });
            }}
          ></SearchBox>
        </Column>
      </Row>
      <Row>
        <Column className="center-text">
          {name && (
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
          )}
        </Column>
      </Row>
    </Container>
  );
};

WeatherContainer.propTypes = {
  temperatureUnit: PropTypes.oneOf(['celcius', 'fahrenheit']),
  temperatureLabel: PropTypes.string.isRequired,
  temperatureMinLabel: PropTypes.string.isRequired,
  temperatureMaxLabel: PropTypes.string.isRequired,
  resultsLabel: PropTypes.string.isRequired,
  noResultsLabel: PropTypes.string.isRequired
};

export default WeatherContainer;
