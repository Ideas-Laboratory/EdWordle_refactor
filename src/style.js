import { createGlobalStyle } from 'styled-components';
import RedHatTextBold from './statics/font/RedHatText-Bold.ttf';
import RedHatTextRegular from './statics/font/RedHatText-Regular.ttf';
import MilknBalls from './statics/font/MilknBalls-BlackDemo-3.ttf';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .dell {
    color: red;
  }
  @font-face {
    font-family: 'RedHatBold';
    src: url(${RedHatTextBold}) format('Truetype');
  }

  @font-face {
    font-family: 'RedHatRegular';
    src: url(${RedHatTextRegular}) format('Truetype');
  }

  @font-face {
    font-family: 'MilknBalls';
    src: url(${MilknBalls}) format('Truetype');
  }

`;
