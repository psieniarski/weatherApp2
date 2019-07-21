import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';
import TextInput from '../core/form/TextInput';

const SearchBox = ({
  onChange,
  placeholder,
  name,
  noResultsLabel,
  resultsLabel
}) => {
  return (
    <form>
      <label>
        {name ? <span>{resultsLabel} </span> : <span>{noResultsLabel}</span>}
        <strong>
          <Text text={name} />
        </strong>
      </label>
      <TextInput type="text" placeholder={placeholder} onChange={onChange} />
    </form>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string
};

export default SearchBox;
