import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';

import Container from '../components/core/layout/Container';
import Column from '../components/core/layout/Column';
import Row from '../components/core/layout/Row';

import Text from '../components/core/Text';
import TextSymbol from '../components/core/TextSymbol';

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
          <Text text="Temperature" />
          <Text text={temperature} />
          <TextSymbol name="degreeCelcius" />
        </Row>
        <Row>
          <Text text="Min temperature" />
          <Text text={temperatureMin} />
          <TextSymbol name="degreeCelcius" />
        </Row>
        <Row>
          <Text text="Max temperature" />
          <Text text={temperatureMax} />
          <TextSymbol name="degreeCelcius" />
        </Row>
      </Column>
    </Container>
  );
};

export default WeatherContainer;
