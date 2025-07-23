import { Link } from "react-router-dom";
import SectionDivider from "../Common/SectionDivider";

const WhoWeAre = () => {
  return (
    <div style={{ backgroundColor: "rgb(25 28 251 / 10%)" }} className="py-5">
      <SectionDivider
        sectionName="Who We Are"
        sectionSlug="about our company and working process"
      />
      <div className="container-md">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fs-1 fw-bold my-3">
              <span className="fw-light">We are From</span> Innovative minds
              Automated solutions <span className="fw-light">World wide</span>
            </h2>
            <p className="mb-4 wow fadeInUp sub_text">
              Devovat IT operates across multiple domains, including software
              development, website development, customized software solutions,
              mobile app development, and theme design. Our mission is to
              empower your journey with innovative technology — and grow
              together in success
            </p>
            <Link to="/" target="_blank" className="btn btn-primary px-3 py-2">
              More About Us
            </Link>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <img
              src="/assets/images/who-we-are.webp"
              alt="Devovat IT Who We Are"
              className="img-fluid wow fadeInLeft mt-5 mt-lg-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
