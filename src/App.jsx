import React from 'react';
import './styles/styles.scss';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFoundPage from './views/NotFoundPage';

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}

export default App;
