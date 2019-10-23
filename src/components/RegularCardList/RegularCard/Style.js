import styled from 'styled-components';

export const Album = styled.article`
  height: 260px;

  a {
    float: left;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 10px 0;
  }

  a:hover {
    background-color: ${(props) => props.theme.fourthColor};
    opacity: 0.5;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 150px;
  background-color: transparent;
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.regularSize};
  color: ${(props) => props.theme.secondaryColor};
  background-color: transparent;

`;

export const SubTitle = styled.p`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  font-size: ${(props) => props.theme.smallestSize};
  color: ${(props) => props.theme.primaryColor};
  background-color: transparent;
`;
