import chefCooking from './assets/restaurant chef B.jpg'
import chefsTalking from './assets/Mario and Adrian A.jpg'

const About = () => {
    return (
        <div className="aboutSection">
            <div className="aboutText">
                <div className="aboutHeading">
                    <h2>Little Lemon</h2>
                    <h5>Chicago</h5>
                </div>
                <div className="aboutParagraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iure quibusdam placeat cumque, odio neque, quaerat corrupti nemo quam numquam necessitatibus autem suscipit assumenda architecto! Quaerat optio deleniti ea, fugit, quidem voluptates velit error necessitatibus. <br/><br/>
                    Consequatur adipisci tempore atque quibusdam dolorem dolores eum rem nostrum! Accusamus provident quidem voluptas asperiores.</p>
                </div>
            </div>
            <div className="aboutImages">
                <img className='aboutPhoto1' src={chefCooking} alt="chef image 2"/>
                <img className='aboutPhoto2' src={chefsTalking} alt="chef image"/>
            </div>
        </div>
    );
}

export default About;