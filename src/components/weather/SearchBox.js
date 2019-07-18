import React from 'react';
import PropTypes from 'prop-types';

import Text from '../core/Text';
import Column from '../core/layout/Column';
import Row from '../core/layout/Row';

import TextInput from '../core/form/TextInput';

const SearchBox = ({ onChange, placeholder, name }) => {
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
      <Row>
        <p>
          {!name && <span>No results</span>}
          {name && <span>City: </span>}
          <strong>
            <Text text={name} />
          </strong>
        </p>
      </Row>
    </Column>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchBox;
