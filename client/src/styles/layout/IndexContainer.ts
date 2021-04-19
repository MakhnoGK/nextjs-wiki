import styled from 'styled-components';

import { colors } from '@styles/variables';

const IndexContainer = styled.aside`
    padding-left: 50px;
    margin-right: 25px;
    user-select: none;

    .indexTitle {
        color: ${colors.textGrayHard};
        font-size: 1.6rem;
        font-weight: 400;
        margin: 40px 0 40px 0;
    }
`;

export default IndexContainer;
