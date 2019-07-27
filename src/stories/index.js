import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchForm from '../components/core/SearchForm';
import Text from '../components/core/Text';
import TextNumber from '../components/core/TextNumber';
import TextSymbol from '../components/core/TextSymbol';
import Icon from '../components/weather/Icon';
import Temperature from '../components/weather/Temperature';

storiesOf('core/SearchForm', module).add('Basic', () => (
  <SearchForm onChange={action('change')}></SearchForm>
));

storiesOf('core/Text', module).add('Basic', () => <Text text="text"></Text>);

storiesOf('core/TextNumber', module).add('Basic', () => (
  <TextNumber number="1"></TextNumber>
));

storiesOf('core/TextSymbol', module)
  .add('Celcius', () => <TextSymbol name="celcius"></TextSymbol>)
  .add('Fahrenheit', () => <TextSymbol name="fahrenheit"></TextSymbol>);

storiesOf('weather/Icon', module)
  .add('Thunderstorm', () => <Icon name="wi-thunderstorm"></Icon>)
  .add('Thunderstorm XL', () => <Icon name="wi-thunderstorm" size="xl"></Icon>);

storiesOf('weather/Temperature', module).add('Basic', () => (
  <Temperature value={10} label="Temperature"></Temperature>
));
