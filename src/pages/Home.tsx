import GlobalClients from "../components/globalClients/GlobalClients";
import Hero from "../components/hero/Hero";
import OurService from "../components/ourService/OurService";
import OurSolutions from "../components/ourSolutions/OurSolutions";
import PartnerBrand from "../components/partner/PartnerBrand";
import WhoWeAre from "../components/whoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <PartnerBrand />
      <WhoWeAre />
      <OurSolutions />
      <OurService />
      <GlobalClients />
    </>
  );
};

export default Home;
