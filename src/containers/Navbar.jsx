import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';
import { POPULAR_CITIES } from '../constants/cities';
import { WEATHER_NAVBAR_LABEL } from '../constants/labels';

const Navbar = ({ list = POPULAR_CITIES, label = WEATHER_NAVBAR_LABEL }) => {
  return (
    <React.Fragment>
      {label}
      <ul>
        {list.map(name => {
          return (
            <li key={`link_${name}`}>
              <A href={`/cities/${name}`}>{name}</A>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string
};

export default Navbar;
