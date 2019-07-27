import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';
import Base from './Base';

const City = ({ name }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherData({ q: name }));
  });
  return <Base />;
};

City.propTypes = {
  name: PropTypes.string
};

export default City;
