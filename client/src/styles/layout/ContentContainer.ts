import styled from 'styled-components';

import { colors } from '../variables';

const ContentContainer = styled.main`
    padding: 35px 35px;
    background-color: ${colors.white};
    box-shadow: 0 0px 1.3px -1px rgba(0, 0, 0, 0.02),
        0 0px 3.1px -1px rgba(0, 0, 0, 0.028),
        0 0px 5.8px -1px rgba(0, 0, 0, 0.035),
        0 0px 10.3px -1px rgba(0, 0, 0, 0.042),
        0 0px 19.2px -1px rgba(0, 0, 0, 0.05),
        0 0px 46px -1px rgba(0, 0, 0, 0.07);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    color: ${colors.headers.h3};

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

export default ContentContainer;
