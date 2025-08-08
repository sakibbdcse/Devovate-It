import { Link } from "react-router-dom";
import "./contactInfo.css";
import FooterContent from "../../content/FooterContent";
const ContactInfo = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="ml-40 mb-3">
          <div>
            <h4 className="text-uppercase fs-5 fw-bold d-inline-block text-color-theme gray-bg m-0 rounded-5 py-2 px-3">
              Contact us
            </h4>
            <h2 className="text-color-theme fw-bold lh-1 fs-1 pt-3 pb-6">
              Let’s Connect Us And Growth Your Business
            </h2>
          </div>

          <div className="contact-info-hover cursor-pointer text-black d-flex align-items-center py-4 px-3 gray-bg br-8 mb-3 trans03">
            <div className="contact-icon text-center bg-white ml-2 mr-1">
              <span>
                <img
                  className="align-middle"
                  src="/assets/icon/contact-phone.svg"
                  alt=""
                />
              </span>
            </div>
            <div>
              <h5 className="fs-6 pb-1 m-0">Gives us a Call</h5>
              <Link
                className="nav-link fs-5 fw-bold"
                to={`tel:${FooterContent.phone}`}
              >
                {FooterContent.phone}
              </Link>
            </div>
          </div>
          <div className="contact-info-hover cursor-pointer text-black d-flex align-items-center py-4 px-3 gray-bg br-8 mb-3 trans03">
            <div className="contact-icon text-center bg-white ml-2 mr-1">
              <span>
                <img
                  className="align-middle"
                  src="/assets/icon/contact-mail.svg"
                  alt=""
                />
              </span>
            </div>
            <div>
              <h5 className="fs-6 pb-1 m-0">Send Us Mail</h5>
              <Link
                className="nav-link fs-5 fw-bold"
                to={`mail:${FooterContent.email}`}
              >
                {FooterContent.email}
              </Link>
            </div>
          </div>
          <div className="contact-info-hover cursor-pointer text-black d-flex align-items-center py-4 px-3 gray-bg br-8 mb-3 trans03">
            <div className="contact-icon text-center bg-white ml-2 mr-1">
              <span>
                <img
                  className="align-middle"
                  src="/assets/icon/contact-location.svg"
                  alt=""
                />
              </span>
            </div>
            <div>
              <h5 className="fs-6 pb-1 m-0">Visit our Office</h5>
              <Link
                className="nav-link fs-5 fw-bold"
                to={`map:${FooterContent.location}`}
              >
                {FooterContent.location}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
