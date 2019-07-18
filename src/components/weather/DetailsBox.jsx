import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';
import TextSymbol from '../core/TextSymbol';
import TextNumber from '../core/TextNumber';

import TextInput from '../core/form/TextInput';
import WeatherIcon from './Icon';

import Column from '../core/layout/Column';
import Row from '../core/layout/Row';

const DetailsBox = ({ icon, temperature, temperatureMin, temperatureMax }) => {
  return (
    <React.Fragment>
      <Column>
        <Row>
          <WeatherIcon name={icon} size="xl" />
        </Row>
      </Column>
      <Column>
        <Row>
          <Text text="Temperature" />
        </Row>
        <Row>
          <Text text="Temperature min" />
        </Row>
        <Row>
          <Text text="Temperature max" />
        </Row>
      </Column>
      <Column>
        <Row>
          <strong>
            <TextNumber number={temperature} round="floor" />
            <TextSymbol name="degreeCelcius" />
          </strong>
        </Row>
        <Row>
          <strong>
            <TextNumber number={temperatureMin} round="ceil" />
            <TextSymbol name="degreeCelcius" />
          </strong>
        </Row>
        <Row>
          <strong>
            <TextNumber number={temperatureMax} round="floor" />
            <TextSymbol name="degreeCelcius" />
          </strong>
        </Row>
      </Column>
    </React.Fragment>
  );
};

DetailsBox.propTypes = {
  icon: PropTypes.string,
  temperature: PropTypes.number,
  temperatureMin: PropTypes.string,
  temperatureMax: PropTypes.string
};
export default DetailsBox;
