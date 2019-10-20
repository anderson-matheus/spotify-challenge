import styled from 'styled-components';

export const Album = styled.article`
`;

export const Image = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${(props) => props.theme.secondaryColor};
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.regularSize};
  color: ${(props) => props.theme.secondaryColor};
`;

export const SubTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.theme.smallestSize};
  color: ${(props) => props.theme.primaryColor};
`;
