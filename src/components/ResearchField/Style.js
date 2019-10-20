import styled from 'styled-components';

const Input = styled.div`
  p {
    color: ${(props) => props.theme.secondaryColor};
    font-size: ${(props) => props.theme.smallSize};
    text-align: left;
  }

  input {
    width: 100%;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
    padding: 10px 0;
    font-size: ${(props) => props.theme.bigSize};
    background-color: transparent;
    font-weight: bolder;
    color: ${(props) => props.theme.primaryColor};
    text-align: left;
  }
`;

export default Input;
