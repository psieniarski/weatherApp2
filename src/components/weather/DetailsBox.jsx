import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';
import TextSymbol from '../core/TextSymbol';
import TextNumber from '../core/TextNumber';

import WeatherIcon from './Icon';

import Column from '../core/layout/Column';
import Row from '../core/layout/Row';

const DetailsBox = ({
  icon,
  temperature,
  temperatureMin,
  temperatureMax,
  temperatureUnit,
  temperatureLabel,
  temperatureMinLabel,
  temperatureMaxLabel
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
          <Text text={temperatureLabel} />
        </Row>
        <Row>
          <Text text={temperatureMinLabel} />
        </Row>
        <Row>
          <Text text={temperatureMaxLabel} />
        </Row>
      </Column>
      <Column>
        <Row>
          <strong>
            <TextNumber number={temperature} round="floor" />
            <TextSymbol name={temperatureUnit} />
          </strong>
        </Row>
        <Row>
          <strong>
            <TextNumber number={temperatureMin} round="ceil" />
            <TextSymbol name={temperatureUnit} />
          </strong>
        </Row>
        <Row>
          <strong>
            <TextNumber number={temperatureMax} round="floor" />
            <TextSymbol name={temperatureUnit} />
          </strong>
        </Row>
      </Column>
    </React.Fragment>
  );
};

DetailsBox.propTypes = {
  icon: PropTypes.string,
  temperature: PropTypes.number.isRequired,
  temperatureMin: PropTypes.number.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  temperatureUnit: PropTypes.string.isRequired,
  temperatureLabel: PropTypes.string.isRequired,
  temperatureMinLabel: PropTypes.string.isRequired,
  temperatureMaxLabel: PropTypes.string.isRequired
};
export default DetailsBox;
