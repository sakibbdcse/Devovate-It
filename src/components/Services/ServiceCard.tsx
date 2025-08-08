import { Link } from "react-router-dom";
import "./serviceCard.css";
import { FaArrowTrendUp } from "react-icons/fa6";
type serviceCartType = {
  icon: string;
  title: string;
  description: string;
  link_url: string;
};
const ServiceCard = ({
  icon,
  title,
  description,
  link_url,
}: serviceCartType) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 cursor-pointer mb-5">
        <div className="gray-bg service-card-hover text-muted bg-white py-3 px-4 position-relative z-1 overflow-hidden br-8 h-100 flex-column d-flex">
          <div>
            <span className="service-icon-span trans03">
              <img
                className="img-fluid"
                style={{ height: "24px", width: "24px" }}
                src={icon}
                alt={`${title}-service-icon`}
              />
            </span>
          </div>
          <div className="flex-grow-1 d-flex flex-column">
            <h3 className="m-0 text-black fs-3 lh-1 trans03 pt-3 pb-4">
              <Link className="nav-link" to="#">
                {title}
              </Link>
            </h3>
            <p className="trans03 m-0 text-gray pb-4">{description}</p>
            <Link to={link_url} className="btn btn-primary trans03 mt-auto">
              Get Service
              <span>
                <FaArrowTrendUp />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
