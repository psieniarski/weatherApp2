import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';

import Container from '../components/core/layout/Container';
import Column from '../components/core/layout/Column';
import Row from '../components/core/layout/Row';
import Icon from '../components/core/Icon';
import TextInput from '../components/core/form/TextInput';

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
          <Icon name={icon} />
        </Row>
      </Column>
      <Column>
        <Row>
          Temperature: {temperature}
          <Icon />
        </Row>
        <Row>
          Min temperature {temperatureMin}
          <Icon />
        </Row>
        <Row>
          Max temperature {temperatureMax}
          <Icon />
        </Row>
      </Column>
    </Container>
  );
};

export default WeatherContainer;
