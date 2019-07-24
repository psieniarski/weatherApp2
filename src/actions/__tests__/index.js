import { fetchWeatherData, APP_ID } from '../index';
import { RSAA } from 'redux-api-middleware';

describe('fetchWeatherData', () => {
  it('should parse proper endpoint', () => {
    const result = fetchWeatherData({ q: 'test' });
    expect(result[RSAA].endpoint).toBe(
      `http://api.openweathermap.org/data/2.5/weather?appid=${APP_ID}&units=metric&q=test`
    );
  });
});
