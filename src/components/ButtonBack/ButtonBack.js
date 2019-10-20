import React from 'react';
import { Link } from 'react-router-dom';
import Back from './Style';

const ButtonBack = () => (
  <Back>
    <Link to="/">
      &larr; Voltar
    </Link>
  </Back>
);

export default ButtonBack;
