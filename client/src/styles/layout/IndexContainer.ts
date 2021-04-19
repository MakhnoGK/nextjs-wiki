import styled from "styled-components";

import { colors } from '@styles/variables';

const IndexContainer = styled.aside`
    padding-left: 50px;
    margin-right: 25px;

    .indexTitle {
        color: ${colors.textGrayHard};
        font-size: 1.6rem;
        font-weight: 400;
        margin: 40px 0 40px 0;
    }

    ul {
        li {
            display: block;

            strong {
                margin-right: 5px;
            }
        }
    }
`;

export const IndexTitleContainer = styled.li<{ level?: number }>`
    .titleWrapper {
        display: flex;
        border-bottom: 1px solid ${colors.grayMedium};
        padding: 15px 0 15px ${(props) => `${props?.level ? props.level * 10 : 0}px`};

        .arrow {
            margin-left: auto;
        }
    }
`;

export default IndexContainer;
