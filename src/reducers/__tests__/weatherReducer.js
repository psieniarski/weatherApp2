import { weatherReducer, initialState } from '../weatherReducer';
import { FETCH_WEATHER_SUCCESS } from '../../constants/actionTypes';

describe('weatherReducer', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle success fetch response', () => {
    expect(
      weatherReducer([], {
        type: FETCH_WEATHER_SUCCESS,
        payload: {
          weather: [{ id: 201 }],
          main: {
            temp: 0,
            temp_min: 1,
            temp_max: 2
          },
          name: 'test'
        }
      })
    ).toEqual({
      iconId: 201,
      temperature: 0,
      temperatureMin: 1,
      temperatureMax: 2,
      name: 'test'
    });
  });
});
