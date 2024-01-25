import Nav from "./Nav"
import logo from "./assets/Logo .png";

const Header = () => {
    return (
        <div className="Header">
            <img src={logo}/>
            <Nav/>
        </div>
    );
};

export default Header;