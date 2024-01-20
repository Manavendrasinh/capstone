import Nav from "./Nav"
import logo from "./assets/Logo .png";

const Header = () => {
    return (
        <>
            <img src={logo}/>
            <Nav/>
        </>
    );
};

export default Header;