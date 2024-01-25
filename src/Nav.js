
const Nav = () => {
    return (
        <nav className="navBar">
            <ul className="list">
                <li className="listItem"><a href="#">Home</a></li>
                <li className="listItem"><a href="#">About</a></li>
                <li className="listItem"><a href="#">Menu</a></li>
                <li className="listItem"><a href="#">Reservation</a></li>
                <li className="listItem"><a href="#">Order Online</a></li>
                <li className="listItem"><a href="#">Login</a></li>
            </ul>
            <div className="menu">
                <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
            <div className="close">
                <i class="fa fa-times fa-2x" aria-hidden="true"></i>
            </div>
        </nav>
    );
};

export default Nav;