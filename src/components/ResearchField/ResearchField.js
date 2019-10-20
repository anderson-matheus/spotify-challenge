import React from 'react';
import Input from './Style';

const ResearchField = () => (
  <Input>
    <p>Busque por artistas, álbuns ou músicas</p>
    <input type="text" name="search" placeholder="Comece a escrever..." />
  </Input>
);

export default ResearchField;
