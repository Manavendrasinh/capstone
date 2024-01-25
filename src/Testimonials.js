import randomUser1 from "./assets/randomUser1.jpg"
import randomUser2 from  "./assets/randomUser2.jpg"
import randomUser3 from "./assets/randomUser3.jpg"
import randomUser4 from "./assets/randomUser4.jpg"

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="ratingsContainer">
                <div className="ratingsPerson">
                    <h4>Ratings</h4>
                    <div className="ratingsBox">
                        <img src={randomUser1} alt="individual"/>
                        <p>Review</p>
                    </div>
                    <h5>Marc Cuban</h5>
                </div>
                <div className="ratingsPerson">
                    <h4>Ratings</h4>
                    <div className="ratingsBox">
                        <img src={randomUser2} alt="individual"/>
                        <p>Review</p>
                    </div>
                    <h5>Sam West</h5>
                </div>
                <div className="ratingsPerson">
                    <h4>Ratings</h4>
                    <div className="ratingsBox">
                        <img src={randomUser3} alt="individual"/>
                        <p>Review</p>
                    </div>
                    <h5>Justin Timberlake</h5>
                </div>
                <div className="ratingsPerson">
                    <h4>Ratings</h4>
                    <div className="ratingsBox">
                        <img src={randomUser4} alt="individual"/>
                        <p>Review</p>
                    </div>
                    <h5>Tiger Woods</h5>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;