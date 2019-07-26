import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onChange, placeholder, children }) => {
  return (
    <form>
      {children}
      <input type="text" placeholder={placeholder} onChange={onChange} />
    </form>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default SearchForm;
