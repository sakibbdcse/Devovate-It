import Breadcrumb from "../components/Common/breadcrumb/Breadcrumb";
import SectionDivider from "../components/Common/SectionDivider";
import ServiceCard from "../components/Services/ServiceCard";
import ServicesContent from "../content/ServicesContent";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import WhoWeAre from "../components/whoWeAre/WhoWeAre";
import Cta from "../components/Common/cta/Cta";

const Service = () => {
  return (
    <>
      <Breadcrumb />
      <SectionDivider
        sectionName="Our Service"
        sectionSlug="We happy to provide our it services and happy client"
      />
      <div className="container">
        <div className="row">
          {ServicesContent.map((data, index) => (
            <ServiceCard
              key={index}
              icon={data.imgSrc}
              title={data.title}
              link_url={data.link}
              description={data.description}
            />
          ))}
        </div>
      </div>
      <WhoWeAre />
      <WhyChooseUs />
      <Cta />
    </>
  );
};

export default Service;
