import styled from 'styled-components';

export const Music = styled.p`
  padding: 0 0 20px 0;
  width: 100%;
  display: flex;
`;

export const SongNumber = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.smallestSize};
  width: 10%;
`;

export const SongName = styled.span`
  color: ${(props) => props.theme.thirdColor};
  font-size: ${(props) => props.theme.smallestSize};
  width: 70%;
`;

export const SongTime = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.smallestSize};
  width: 15%;
  text-align: right;
`;
