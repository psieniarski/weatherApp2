import React from 'react';
import WeatherContainer from '../containers/TemperatureContainer';
import SearchContainer from '../containers/SearchContainer';

const Home = () => {
  return (
    <React.Fragment>
      <SearchContainer />
      <WeatherContainer />
    </React.Fragment>
  );
};

export default Home;
