import { NavbarContainer } from '../../styles';
import { Avatar } from '../';
import NavbarSearch from './Navbar/NavbarSearch';

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
