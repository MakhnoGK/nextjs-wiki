import { colors } from '@styles/variables';
import styled from 'styled-components';

const TreeNodeStyles = styled.li<{ topLevel?: boolean }>`
    counter-increment: item;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);

    &::before {
        content: counters(item, '.') '${(props) => (props.topLevel ? '.' : '')}';
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

        &:hover {
            background-color: ${colors.grayMedium};
        }

        .arrow {
            margin-left: auto;
        }
    }

    & > ol {
        grid-row: 2 / 3;
    }
`;

export default TreeNodeStyles;
