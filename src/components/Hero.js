import { Link } from "react-router-dom";

const Hero = () => {
 
    return (
        <div className="hero py-5">
            <div className="container">
                <div className="hero-text">
                    <h1 data-aos="fade-up">We ensure Better Education for a better world!</h1>
                    <p data-aos="fade-up" data-aos-delay="300" className="line-height my-4">
                    Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
                    </p>
                    <Link to="/About"><button data-aos="fade-up" data-aos-delay="600" className="button shadow-sm">Explore more <img src={"../assets/arrow.png"} alt="" /></button></Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
