import FooterContainer from '@styles/layout/FooterContainer';

const Footer = () => {
    return (
        <FooterContainer>
            All rights reserved &copy; {new Date().getFullYear()}
        </FooterContainer>
    );
};

export default Footer;
