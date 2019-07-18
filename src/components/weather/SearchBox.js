import React from 'react';
import PropTypes from 'prop-types';

import Column from '../core/layout/Column';
import Row from '../core/layout/Row';

import TextInput from '../core/form/TextInput';

const SearchBox = ({ onChange, placeholder }) => {
  return (
    <Column>
      <Row>
        <form>
          <TextInput
            type="text"
            placeholder={placeholder}
            onChange={onChange}
          />
        </form>
      </Row>
    </Column>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchBox;
