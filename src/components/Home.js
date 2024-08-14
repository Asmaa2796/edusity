import Hero from "./Hero";
import Title from "./Title";
import Program from "./Program";
import About from "./About";
import Pricing from "./Pricing";
import VideoPlayer from "./VideoPlayer";
import ContactUs from "./ContactUs";
import Courses from "./Courses";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
        <Hero/>
        <Title mainTitle="What we offer" subTitle="Our program"/>
        <Program/>
        <Title mainTitle="Top of categories" subTitle="Our categories"/>
        <Categories/>
        <About />
        <Title mainTitle="Choose your best plan" subTitle="Pricing"/>
        <Pricing/>
        <Title mainTitle="Browse our courses" subTitle="Courses"/>
        <Courses />
        <Title mainTitle="Get in touch" subTitle="Contact us"/>
        <ContactUs/>
        <VideoPlayer />
    </>
  );
};

export default Home;
