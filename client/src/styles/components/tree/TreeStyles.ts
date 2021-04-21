import styled from 'styled-components';

const TreeStyles = styled.ol<{ isHidden: boolean }>`
    display: ${(props) => (props.isHidden ? 'none' : 'initial')};
`;

export default TreeStyles;
