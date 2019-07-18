import React from 'react';
import PropTypes from 'prop-types';

import Text from '../components/core/Text';
import TextSymbol from '../components/core/TextSymbol';
import TextNumber from '../components/core/TextNumber';

import TextInput from '../components/core/form/TextInput';
import WeatherIcon from '../components/WeatherIcon';

import Column from '../components/core/layout/Column';
import Row from '../components/core/layout/Row';

const WeatherDetails = ({
  icon,
  temperature,
  temperatureMin,
  temperatureMax,
  temperatureMessage,
  temperatureMaxMessage,
  temperatureMinMessage
}) => {
  return (
    <React.Fragment>
      <Column>
        <Row>
          <WeatherIcon name={icon} size="xl" />
        </Row>
      </Column>
      <Column>
        <Row>
          <Text text={temperatureMessage} />
        </Row>
        <Row>
          <Text text={temperatureMinMessage} />
        </Row>
        <Row>
          <Text text={temperatureMaxMessage} />
        </Row>
      </Column>
      <Column>
        <Row>
          <strong>
            <TextNumber number={temperature} round="floor" />
          </strong>
        </Row>
        <Row>
          <strong>
            <TextNumber number={temperatureMin} round="ceil" />
          </strong>
        </Row>
        <Row>
          <strong>
            <TextNumber number={temperatureMax} round="floor" />
          </strong>
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
    </React.Fragment>
  );
};

export default WeatherDetails;
