import React from 'react';

import './styles/styles.scss';

import WeatherContainer from './containers/WeatherContainer';

function App() {
  return <WeatherContainer temperatureUnit="celcius" />;
}

export default App;
