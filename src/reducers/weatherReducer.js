import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from '../constants/actionTypes';

export const initialState = {
  iconId: '',
  temperature: 0,
  temperatureMin: 0,
  temperatureMax: 0,
  name: ''
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        iconId: action.payload.weather[0].id,
        temperature: action.payload.main.temp,
        temperatureMin: action.payload.main.temp_min,
        temperatureMax: action.payload.main.temp_max,
        name: action.payload.name,
        isFetching: false
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}
