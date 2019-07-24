import React from 'react';
import WeatherContainer from '../containers/TemperatureContainer';
import SearchContainer from '../containers/SearchContainer';

const Home = () => {
  return (
    <React.Fragment>
      <SearchContainer />
      <WeatherContainer temperatureUnit="celcius" />
    </React.Fragment>
  );
};

export default Home;
