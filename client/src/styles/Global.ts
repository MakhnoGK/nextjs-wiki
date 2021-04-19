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
        font-size: 0.9rem;
        background-color: ${colors.grayLight};
        color: ${colors.textGrayMedium};
    }

    a {
        color: ${colors.links.base};
        text-decoration: none;
        transition: 0.2s ease-out;
        transition-property: color;
        cursor: pointer;

        &:hover {
            color: ${colors.links.hover};
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

        margin: 1.3rem 0 1rem 0;

        &:first-child {
            margin-top: 0;
        }
    }

    h1 {
        color: ${colors.headers.h1};
        font-size: 3rem;
    }

    h2 {
        color: ${colors.headers.h2};
        font-size: 2.5rem;
    }

    h3 {
        color: ${colors.headers.h3};
        font-size: 2.3rem;
    }

    h4 {
        font-size: 2.1rem;
    }

    h5 {
        font-size: 1.8rem;
    }

    h6 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.9rem;
    }

    p,
    blockquote {
        line-height: 200%;
    }
`;

export default GlobalStyles;
