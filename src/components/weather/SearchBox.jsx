import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';

import {
  WEATHER_NO_RESULTS_LABEL,
  WEATHER_RESULTS_LABEL
} from '../../constants/labels';

const SearchBox = ({
  onChange,
  placeholder,
  name,
  noResultsLabel = WEATHER_NO_RESULTS_LABEL,
  resultsLabel = WEATHER_RESULTS_LABEL
}) => {
  return (
    <form>
      <label>
        {name ? <span>{resultsLabel} </span> : <span>{noResultsLabel}</span>}
        <strong>
          <Text text={name} />
        </strong>
      </label>
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </form>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  noResultsLabel: PropTypes.string,
  resultsLabel: PropTypes.string
};

export default SearchBox;
