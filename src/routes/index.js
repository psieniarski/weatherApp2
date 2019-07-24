import React from 'react';
import Home from '../views/Home';
import City from '../views/City';

const routes = {
  '/': () => <Home />,
  '/cities/:name': ({ name }) => <City name={name} />
};

export default routes;
