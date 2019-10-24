import styled from 'styled-components';

export const Music = styled.p`
  padding: 10px;
  width: 100%;
  display: flex;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.fourthColor};
    opacity: 0.5;
  }
`;

export const SongNumber = styled.span`
  background-color: transparent;
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.smallestSize};
  width: 10%;
`;

export const SongName = styled.span`
  background-color: transparent;
  color: ${(props) => props.theme.thirdColor};
  font-size: ${(props) => props.theme.smallestSize};
  width: 70%;
  word-wrap: break-word;
`;

export const SongTime = styled.span`
  background-color: transparent;
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.smallestSize};
  width: 15%;
  text-align: right;
`;
