import styled from 'styled-components';

const MessageTitle = styled.p`
  padding: 10px;
  background-color: ${(props) => props.theme.fourthColor};
  color: ${(props) => props.theme.thirdColor};
  font-size: ${(props) => props.theme.smallSize}
`;

export default MessageTitle;
