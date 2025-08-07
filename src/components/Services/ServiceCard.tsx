import { Link } from "react-router-dom";
import "./serviceCard.css";
const ServiceCard = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6 cursor-pointer mb-30">
        <div className="text-muted bg-white py-3 px-2 gray-bg-4  p-relative z-index-1 fix br-8">
          <div>
            <span className="service-icon-span trans03">
              <img src="/assets/icon/serviceicon1.svg" alt="" />
            </span>
          </div>
          <div className="vl-service-icon-box-4-content4">
            <h3 className="m-0 text-black fs-3 lh-1 trans03 pt-3 pb-4">
              <Link className="nav-link" to="#">
                Cloud Computing Solutions
              </Link>
            </h3>
            <p className="trans03 m-0 text-gray pb-24">
              Leverage the power cloud to enhance <br /> scalability,
              flexibility, and performance <br />
              Our cloud computing solutions secure.
            </p>
            <Link to="/" className="readmore trans03">
              Learn More{" "}
              <span>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
