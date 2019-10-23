import React from 'react';
import PropTypes from 'prop-types';
import MessageTitle from './Style';

const Message = ({ message }) => (<MessageTitle>{message}</MessageTitle>);

Message.propTypes = {
  message: PropTypes.string,
};

Message.defaultProps = {
  message: '',
};

export default Message;
