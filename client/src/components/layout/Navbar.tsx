import { NavbarContainer } from '@styles/.';
import { Avatar } from '@components/.';
import NavbarSearch from '@components/layout/Navbar/NavbarSearch';

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className="navbarLogo">W</div>
            <div className="navbarSearch">
                <NavbarSearch />
            </div>
            <Avatar />
        </NavbarContainer>
    );
};

export default Navbar;
