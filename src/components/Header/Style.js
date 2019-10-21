import styled from 'styled-components';

const Logo = styled.div`
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

export default Logo;
