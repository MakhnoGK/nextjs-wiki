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
`;

export default ContentContainer;
