import React from 'react';
import PropTypes from 'prop-types';

import {
  WEATHER_NO_RESULTS_LABEL,
  WEATHER_RESULTS_LABEL
} from '../../constants/labels';

const QueryPreview = ({
  query,
  noResultsLabel = WEATHER_NO_RESULTS_LABEL,
  resultsLabel = WEATHER_RESULTS_LABEL
}) => {
  return (
    <React.Fragment>
      {query ? <span>{resultsLabel} </span> : <span>{noResultsLabel}</span>}
      <strong>{query}</strong>
    </React.Fragment>
  );
};

QueryPreview.propTypes = {
  query: PropTypes.string,
  noResultsLabel: PropTypes.string,
  resultsLabel: PropTypes.string
};

export default QueryPreview;
