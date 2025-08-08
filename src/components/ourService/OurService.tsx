import { useState } from "react";
import SectionDivider from "../Common/SectionDivider";
import Services from "../../content/ServicesContent";
import ServiceCard from "../Common/ServiceCard";

const OurService = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div style={{ backgroundColor: "rgb(25 28 251 / 10%)" }} className="my-4">
      <SectionDivider
        sectionName="Our Services"
        sectionSlug="Share Your idea to Design Any Customized Software and Application"
      />
      <div className="container">
        <div className="row g-3">
          {Services.map((service, index) => (
            <div className="col-xl-4 col-md-6">
              <ServiceCard
                key={index}
                index={index}
                {...service}
                isActive={activeIndex === index}
                onClick={setActiveIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
