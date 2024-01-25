import logo from "./assets/Logo .png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo}/>
            <div>
                <h5>Doormat Navigation</h5>
                <ul className="list">
                    <li className="listItem"><a href="#">Home</a></li>
                    <li className="listItem"><a href="#">About</a></li>
                    <li className="listItem"><a href="#">Menu</a></li>
                    <li className="listItem"><a href="#">Reservation</a></li>
                    <li className="listItem"><a href="#">Order Online</a></li>
                    <li className="listItem"><a href="#">Login</a></li>
                </ul>
            </div>
            <div>
                <h5>Contact</h5>
                <ul className="list">
                    <li className="listItem"><a href="#">Address</a></li>
                    <li className="listItem"><a href="#">Phone Number</a></li>
                    <li className="listItem"><a href="#">Email</a></li>
                </ul>
            </div>
            <div>
                <h5>Social Media Links</h5>
                <ul className="list">
                    <li className="listItem"><a href="#">Address</a></li>
                    <li className="listItem"><a href="#">Phone Number</a></li>
                    <li className="listItem"><a href="#">Email</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;