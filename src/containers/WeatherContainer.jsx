import React from 'react';

import {
  TEMPERATURE_MESSAGE,
  MIN_TEMPERATURE_MESSAGE,
  MAX_TEMPERATURE_MESSAGE
} from '../messages';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';

import TextInput from '../components/core/form/TextInput';

import Container from '../components/core/layout/Container';
import Column from '../components/core/layout/Column';
import Row from '../components/core/layout/Row';

import WeatherDetails from '../components/WeatherDetails';

const WeatherContainer = props => {
  const dispatch = useDispatch();
  const onQueryChange = ({ q }) => {
    dispatch(fetchWeatherData({ q }));
  };
  const temperature = useSelector(state => state.weather.temperature);
  const temperatureMin = useSelector(state => state.weather.temperatureMin);
  const temperatureMax = useSelector(state => state.weather.temperatureMax);
  const icon = useSelector(state => state.weather.icon);

  return (
    <Container>
      <Column>
        <Row>
          <form>
            <TextInput
              type="text"
              placeholder="City"
              onChange={event => {
                onQueryChange({ q: event.target.value });
              }}
            />
          </form>
        </Row>
      </Column>
      <WeatherDetails
        icon={icon}
        temperature={temperature}
        temperatureMin={temperatureMin}
        temperatureMax={temperatureMax}
        temperatureMessage={TEMPERATURE_MESSAGE}
        temperatureMinMessage={MIN_TEMPERATURE_MESSAGE}
        temperatureMaxMessage={MAX_TEMPERATURE_MESSAGE}
      />
    </Container>
  );
};

export default WeatherContainer;
