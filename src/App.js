import React from 'react';
import './styles/styles.scss';
import { useRoutes } from 'hookrouter';
import routes from './routes';

const NotFoundPage = () => {
  return <p>Page not found.</p>;
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}

export default App;
