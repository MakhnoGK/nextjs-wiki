import { colors } from '@styles/variables';
import styled from 'styled-components';

const TreeNodeStyles = styled.li<{ level?: number }>`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);

    &::before {
        font-weight: bold;
        margin-right: 5px;
        grid-column: 1 / 2;
    }

    ol {
        grid-column: 1 / 4;
    }

    .titleWrapper {
        grid-column: 2 / 3;
        display: flex;
        transition: 0.15s ease-in-out;
        transition-property: background-color;
        padding: 15px 5px 15px ${(props) => props.level * 15}px;
        border-bottom: 1px solid ${colors.grayMedium};

        &:hover {
            cursor: pointer;
            background-color: ${colors.grayMedium};
        }

        .level {
            font-weight: bold;
            margin-right: 7px;
        }

        .arrow {
            margin-left: auto;
            display: flex;
            align-items: center;
        }
    }

    & > ol {
        grid-row: 2 / 3;
    }
`;

export default TreeNodeStyles;
