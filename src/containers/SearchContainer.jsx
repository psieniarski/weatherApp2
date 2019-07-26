import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions';
import SearchForm from '../components/core/SearchForm';
import QueryPreview from '../components/weather/QueryPreview';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.weather.name);

  return (
    <SearchForm
      name={name}
      onChange={event => {
        dispatch(fetchWeatherData({ q: event.target.value }));
      }}
    >
      <label>
        <QueryPreview query={name} />
      </label>
    </SearchForm>
  );
};

export default SearchContainer;
