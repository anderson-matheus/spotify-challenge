import styled from 'styled-components';

export const Player = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};

  iframe {
    height: 40px;
    border: none;
    display: flex;
    width: 100%;
  }
`;

export const SongName = styled.p`
  text-align: center;
  padding: 5px 0;
  font-size: ${(props) => props.theme.smallestSize};
  text-align: center;
`;
