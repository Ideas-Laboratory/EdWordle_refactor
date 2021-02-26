import { createGlobalStyle } from 'styled-components';
import RedHatTextBold from './RedHatText-Bold.ttf';
export default createGlobalStyle`
    @font-face {
        font-family: 'RedHatBold';
        src: url(${RedHatTextBold}) format('TrueType');
    }
`;