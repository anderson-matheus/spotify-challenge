import React from 'react';
import PropTypes from 'prop-types';
import Input from './Style';

const ResearchField = ({ value, onChange }) => (
  <Input>
    <p>Busque por artistas, álbuns ou músicas</p>
    <input
      type="text"
      name="search"
      value={value}
      onChange={onChange}
      placeholder="Comece a escrever..."
    />
  </Input>
);

ResearchField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ResearchField.defaultProps = {
  value: '',
};

export default ResearchField;
