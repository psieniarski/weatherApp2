import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';
import TextSymbol from '../core/TextSymbol';
import TextNumber from '../core/TextNumber';

import TextInput from '../core/form/TextInput';
import WeatherIcon from './Icon';

import Column from '../core/layout/Column';
import Row from '../core/layout/Row';

const Details = ({
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

export default Details;
