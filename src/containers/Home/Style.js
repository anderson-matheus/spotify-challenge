import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.section`
  margin-top: 50px;
`;

export const HomeTitle = styled.p`
  color: ${(props) => props.theme.thirdColor};
  font-size: ${(props) => props.theme.regularSize};
  margin-bottom 30px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
