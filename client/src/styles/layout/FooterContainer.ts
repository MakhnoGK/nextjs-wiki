import { darken } from 'polished';

import { colors } from "@styles/variables";
import styled from "styled-components";

const FooterContainer = styled.footer`
    grid-column: 2 / 3;
    color: ${darken(0.3, colors.grayLight)};
    text-align: center;
    font-size: 0.75rem;
    margin: 1rem 0 1rem 0;
`;

export default FooterContainer;
