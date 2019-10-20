import styled from 'styled-components';

const Back = styled.p`
  a {
    text-decoration: none;
    font-size: ${(props) => props.theme.regularSize};
    color: ${(props) => props.theme.thirdColor};
  }
  
  a:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export default Back;
