import Technology from "../../content/Technology";
import SectionDivider from "../Common/SectionDivider";
import "./whyChoose.css";
const WhyChooseUs = () => {
  return (
    <>
      <SectionDivider
        sectionName="Why Choose Us"
        sectionSlug="Our Expertise and Technology Solutions"
      />
      <div className="container">
        <div className="row">
          {Technology.map((data, index) => (
            <div
              key={index}
              className="col-xl-2 col-sm-4 col-6 d-flex justify-content-center align-items-center logo_box"
            >
              <div className="d-block pointer">
                <img src={data.logo} alt={data.name} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
