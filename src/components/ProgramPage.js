import Banner from "./Banner";
import Program from "./Program";
import Title from "./Title";
const ProgramPage = () => {
  return (
    <>
      <Banner currentPage="Program" bg="url(../assets/banner3.jpg)" />
      <Title mainTitle="What we offer" subTitle="Our program"/>
      <Program />
    </>
  );
};

export default ProgramPage;
