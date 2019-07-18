import { RSAA } from 'redux-api-middleware';
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from './actionTypes';
export function fetchWeatherData({ q = '' } = {}) {
  const appid = process.env.REACT_APP_OPEN_WEATHER_MAP_APPID;
  return {
    [RSAA]: {
      endpoint: `http://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&q=${q}`,
      method: 'GET',
      types: [
        FETCH_WEATHER_REQUEST,
        FETCH_WEATHER_SUCCESS,
        FETCH_WEATHER_FAILURE
      ]
    }
  };
}
