import { createGlobalStyle } from 'styled-components';
import RobotoCondensedRegular from '../assets/fonts/roboto-condensed/RobotoCondensed-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Condensed';
    src: url(${RobotoCondensedRegular});
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 16px;
    line-height: 1.6em;
    margin: 0;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;
