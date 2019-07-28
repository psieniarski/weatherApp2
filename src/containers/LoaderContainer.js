import React from 'react';
import PropTypes from 'prop-types';

import useDebounce from '../hooks/useDebounce';
import { DEBOUNCE_TIMEOUT } from '../constants/generic';

const LoaderContainer = ({ show }) => {
  const debouncedShow = useDebounce(show, DEBOUNCE_TIMEOUT);

  const style = { visibility: debouncedShow ? 'visible' : 'hidden' };
  return (
    <div className="fadeOut" style={style}>
      Loading...
    </div>
  );
};

LoaderContainer.propTypes = {
  show: PropTypes.bool
};

export default LoaderContainer;
