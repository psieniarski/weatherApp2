import { FETCH_WEATHER_SUCCESS } from '../actions/actionTypes';
import iconMapping from '../helpers/iconMapping';

export const initialState = {
  icon: 'default',
  temperature: 0,
  temperatureMin: 0,
  temperatureMax: 0
};

export function weather(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        icon: iconMapping[action.payload.weather[0].id],
        temperature: action.payload.main.temp,
        temperatureMin: action.payload.main.temp_min,
        temperatureMax: action.payload.main.temp_max
      };
    default:
      return state;
  }
}
