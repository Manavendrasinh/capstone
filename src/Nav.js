import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navBar">
            <ul className="list">
                <li ><Link to='/' className="listItem">Home</Link></li>
                <li ><Link to='/' className="listItem">About</Link></li>
                <li ><Link to='/' className="listItem">Menu</Link></li>
                <li ><Link to='/ReservationPage' className="listItem">Reservation</Link></li>
                <li ><Link to='/' className="listItem">Order Online</Link></li>
                <li ><Link to='/' className="listItem">Login</Link></li>
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