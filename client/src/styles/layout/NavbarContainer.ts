import styled from 'styled-components';

import { colors } from '../variables';

const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 75px;
    padding: 0 50px 0 50px;
    background: ${colors.white};
    border-bottom: 1px solid ${colors.grayMedium};

    .navbarLogo {
        font-size: 36px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color: ${colors.textGrayMedium};
        user-select: none;
    }

    .navbarSearch {
        width: 45vw;
        margin: 0 0 0 -4vw;

        input {
            display: block;
            font-family: inherit;
            color: ${colors.textGrayMedium};
            padding: 7px 17px;
            margin: 0 auto;
            width: 50%;
            border: 1px solid ${colors.grayMedium};
            border-radius: 16px;
            outline: none;
            transition: 0.2s ease-out;
            transition-property: width;

            &:focus {
                width: 100%;
            }
        }
    }

    .navbarAvatar {
        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
    }
`;

export default NavbarContainer;
