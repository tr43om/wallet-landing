import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// CSS RESET
*, *::before, *::after {
    box-sizing: border-box; 
}
* {
  margin: 0;
}
html, body {
  font: ${({ theme: { variants } }) => variants.body4};
  scroll-behavior: smooth;
  overflow-x: hidden;
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.primaryDark};

}

`;

export default GlobalStyle;
