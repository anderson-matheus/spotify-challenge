import styled from 'styled-components';

export const Section = styled.section`
  color: #FFF;
  display: flex;

  div:first-child {
    width: 100px;
    height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Article = styled.article`
  width: calc(100% - 100px);
  background: #FBFBFB;
  color: #000;
`;
