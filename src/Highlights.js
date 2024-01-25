import greekSalad from "./assets/greek_salad.jpg"
import bruchetta from "./assets/bruchetta.png"
import lemonDesset from "./assets/lemon_dessert.jpg"
import delivery from "./assets/fast-delivery (1).png"

const Highlights = () => {
    return (
        <div className="highlights">
            <div className="highlightsTitle">
                <h2>Specials</h2>
                <button>On the Menu</button>
            </div>
            <div className="highlightDishes">
                <div className="dishContainer">
                    <div className="dishImageContainer">
                        <img src={greekSalad} alt="dish image"/>
                    </div>
                    <div className="dishTitle">
                        <h4>Greek Salad</h4>
                        <h4>$12.99</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                    <div className="dishDelivery">
                        <h5>Order a delivery</h5>
                        <img src={delivery} alt="delivery photo"/>
                    </div>
                </div>
                <div className="dishContainer">
                    <div className="dishImageContainer">
                        <img src={bruchetta} alt="dish image"/>
                    </div>
                    <div className="dishTitle">
                        <h4>Bruschetta</h4>
                        <h4>$5.89</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                    <div className="dishDelivery">
                        <h5>Order a delivery</h5>
                        <img src={delivery} alt="delivery photo"/>
                    </div>
                </div>
                <div className="dishContainer">
                    <div className="dishImageContainer">
                        <img src={lemonDesset} alt="dish image"/>
                    </div>
                    <div className="dishTitle">
                        <h4>Lemon Dessert</h4>
                        <h4>$4.99</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                    <div className="dishDelivery">
                        <h5>Order a delivery</h5>
                        <img src={delivery} alt="delivery photo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Highlights;