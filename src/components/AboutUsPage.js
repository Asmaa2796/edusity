import About from "./About";
import Banner from "./Banner";
import VideoPlayer from "./VideoPlayer";
const AboutUsPage = () => {
  return (
    <>
      <Banner currentPage="About us" bg="url(../assets/banner4.jpg)" />
      <About/>
      <VideoPlayer/>
    </>
  );
};

export default AboutUsPage;
