import Banner from "./Banner";
import Pricing from "./Pricing";
import Title from "./Title";
const PricingPage = () => {
    return (
        <>
          <Banner currentPage="Pricing" bg="url(../assets/banner1.jpg)" />
          <Title mainTitle="Choose your best plan" subTitle="Pricing"/>
          <Pricing/>  
        </>
    );
}

export default PricingPage;
