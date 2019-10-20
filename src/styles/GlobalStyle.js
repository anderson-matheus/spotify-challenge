import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.fontFamily};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export default GlobalStyle;
