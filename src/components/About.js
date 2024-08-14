import { useDispatch } from "react-redux";
import { onClickVideo } from "../redux/action/action";

const About = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(onClickVideo());
    console.log(onClickVideo());
  };

  return (
    <>
      <div className="about py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="video" data-aos="fade-up" data-aos-delay="300">
                <img src={"../assets/about.jpg"} alt="" className="main-img" />
                <img
                  onClick={onClick}
                  src={"../assets/play-button.png"}
                  alt=""
                  className="play-icon"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="video-text">
                <h4>About Edusity</h4>
                <h3>Nurturing Tomorrow's Leaders Today</h3>
                <span></span>
                <p data-aos="fade-up" data-aos-delay="300" className="line-height text-color1">
                  Embark on a transformative educational journey with our
                  university's comprehensive education programs. Our
                  cutting-edge curriculum is designed to empower students with
                  the knowledge, skills, and experiences needed to excel in the
                  dynamic field of education.
                </p>
                <p data-aos="fade-up" data-aos-delay="500" className="line-height text-color1">
                  With a focus on innovation, hands-on learning, and
                  personalized mentorship, our programs prepare aspiring
                  educators to make a meaningful impact in classrooms, schools,
                  and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
