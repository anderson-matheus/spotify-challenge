import styled from 'styled-components';

export const Section = styled.section`
  color: #FFF;
  display: flex;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Article = styled.article`
  width: calc(100% - 100px);
  color: #000;
  padding: 40px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;
