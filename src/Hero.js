import heroImage from "./assets/restauranfood.jpg"

const Hero = () => {
    return (
        <div className="heroSection">
            <div className="heroText">
                <div className="heroHeading">
                    <h1>Little Lemon</h1>
                    <h5>Chicago</h5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    <br/> <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eius, ipsam nihil quidem assumenda officia saepe atque at ratione labore!
                </p>
                <div className="btnReserve">
                    <button>Reserve a table</button>
                </div>
            </div>
            <div className="heroImage">
                <img src={heroImage}/>
            </div>
        </div>
    );
}

export default Hero;