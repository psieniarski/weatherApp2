import React from 'react';
import './styles/styles.scss';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import Navbar from './containers/Navbar';

function App() {
  const routeResult = useRoutes(routes);
  return (
    <React.Fragment>
      <Navbar />
      {routeResult}
    </React.Fragment>
  );
}

export default App;
