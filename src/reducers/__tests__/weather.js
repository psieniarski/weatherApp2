import { weather, initialState } from '../weather';
import { FETCH_WEATHER_SUCCESS } from '../../actions/actionTypes';

describe('weather reducer', () => {
  it('should return the initial state', () => {
    expect(weather(undefined, {})).toEqual(initialState);
  });
  it('should handle success fetch response', () => {
    expect(
      weather([], {
        type: FETCH_WEATHER_SUCCESS,
        payload: {
          weather: [{ id: 201 }],
          main: {
            temp: 0,
            temp_min: 1,
            temp_max: 2
          }
        }
      })
    ).toEqual({
      icon: 'wi-thunderstorm',
      temperature: 0,
      temperatureMin: 1,
      temperatureMax: 2
    });
  });
});
