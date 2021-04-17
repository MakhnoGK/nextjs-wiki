import { createGlobalStyle } from 'styled-components';

import { colors } from './variables';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: ${colors.grayLight};
        color: ${colors.textGrayMedium};
    }

    a {
        color: ${colors.links.base};
        text-decoration: none;
        transition: 0.2s ease-out;
        transition-property: color;
        cursor: pointer;

        a:hover {
            color: ${colors.links.hover};
        }
    }
`;

export default GlobalStyles;
