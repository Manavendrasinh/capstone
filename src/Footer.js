import logo from "./assets/Logo .png"

const Footer = () => {
    return (
        <>
            <img src={logo}/>
            <div>
                <h5>Doormat Navigation</h5>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div>
                <h5>Contact</h5>
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <div>
                <h5>Social Media Links</h5>
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
        </>
    );
};

export default Footer;