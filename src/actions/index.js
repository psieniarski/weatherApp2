import { RSAA } from 'redux-api-middleware';
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from './actionTypes';

export const APP_ID = process.env.REACT_APP_OPEN_WEATHER_MAP_APPID || '';

export function fetchWeatherData({ q = '', temperatureUnit } = {}) {
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
}
