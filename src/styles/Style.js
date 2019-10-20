import styled from 'styled-components';

export const Section = styled.section`
  color: #FFF;
  display: flex;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.div`
  width: 100px;
  
  display: flex;
  justify-content: center;

  img {
    margin: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Article = styled.article`
  width: calc(100% - 100px);
  color: #000;
  padding: 40px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 3s0px;
  }
`;
