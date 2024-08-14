import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Title from "./Title";
const ContactUsPage = () => {
  return (
    <>
      <Banner currentPage="Contact us" bg="url(../assets/banner2.jpg)" />
      <Title mainTitle="Get in touch" subTitle="Contact us"/>
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
