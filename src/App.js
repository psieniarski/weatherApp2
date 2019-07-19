import React from 'react';

import './styles/styles.scss';

import WeatherContainer from './containers/WeatherContainer';

function App() {
  return (
    <WeatherContainer
      temperatureUnit="celcius"
      temperatureLabel="Temperature"
      temperatureMinLabel="Temperature Min"
      temperatureMaxLabel="Temperature Max"
    />
  );
}

export default App;
