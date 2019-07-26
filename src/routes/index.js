import React from 'react';
import Home from '../views/Home';
import City from '../views/City';
import NotFoundPage from '../views/NotFoundPage';

const routes = {
  '/': () => <Home />,
  '/cities/:name': ({ name }) => <City name={name} />,
  '*': () => <NotFoundPage />
};

export default routes;
