import { RSAA } from 'redux-api-middleware';
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from '../constants/actionTypes';

import { WEATHER_TEMPERATURE_UNIT } from '../constants/units';

export const APP_ID = process.env.REACT_APP_OPEN_WEATHER_MAP_APPID || '';

export const fetchWeatherData = ({
  q = '',
  temperatureUnit = WEATHER_TEMPERATURE_UNIT
}) => {
  const units = temperatureUnit === 'celcius' ? 'metric' : 'imperial';
  return {
    [RSAA]: {
      endpoint: `http://api.openweathermap.org/data/2.5/weather?appid=${APP_ID}&units=${units}&q=${q}`,
      method: 'GET',
      types: [
        FETCH_WEATHER_REQUEST,
        FETCH_WEATHER_SUCCESS,
        FETCH_WEATHER_FAILURE
      ]
    }
  };
};
