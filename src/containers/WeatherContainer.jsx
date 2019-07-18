import React from 'react';

import {
  TEMPERATURE_MESSAGE,
  MIN_TEMPERATURE_MESSAGE,
  MAX_TEMPERATURE_MESSAGE
} from '../messages';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';

import Container from '../components/core/layout/Container';
import Column from '../components/core/layout/Column';
import Row from '../components/core/layout/Row';

import Text from '../components/core/Text';
import TextSymbol from '../components/core/TextSymbol';
import TextNumber from '../components/core/TextNumber';

import TextInput from '../components/core/form/TextInput';
import WeatherIcon from '../components/WeatherIcon';

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
          <TextInput
            onChange={event => {
              onQueryChange({ q: event.target.value });
            }}
          />
        </Row>
      </Column>
      <Column>
        <Row>
          <WeatherIcon name={icon} size="xl" />
        </Row>
      </Column>
      <Column>
        <Row>
          <Text text={TEMPERATURE_MESSAGE} />
        </Row>
        <Row>
          <Text text={MIN_TEMPERATURE_MESSAGE} />
        </Row>
        <Row>
          <Text text={MAX_TEMPERATURE_MESSAGE} />
        </Row>
      </Column>
      <Column>
        <Row>
          <TextNumber number={temperature} round="floor" />
        </Row>
        <Row>
          <TextNumber number={temperatureMin} round="ceil" />
        </Row>
        <Row>
          <TextNumber number={temperatureMax} round="floor" />
        </Row>
      </Column>
      <Column>
        <Row>
          <TextSymbol name="degreeCelcius" />
        </Row>
        <Row>
          <TextSymbol name="degreeCelcius" />
        </Row>
        <Row>
          <TextSymbol name="degreeCelcius" />
        </Row>
      </Column>
    </Container>
  );
};

export default WeatherContainer;
