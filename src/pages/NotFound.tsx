import { Link } from "react-router-dom";
import Breadcrumb from "../components/Common/breadcrumb/Breadcrumb";
import Cta from "../components/Common/cta/Cta";
import { FaArrowTrendUp } from "react-icons/fa6";

const NotFound = () => {
  return (
    <>
      <Breadcrumb pageTitle="Error 404" pageName="error-404" pageUrl="error" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div>
              <div className="pb-4">
                <img
                  className="w-100 align-middle"
                  src="/assets/images/error-404.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="fs-2 fw-bold text-color-theme pb-2 m-0">
                  Sorry, Page Not Found!
                </h3>
                <p className="pb-3 m-0">
                  Sorry, the page you are looking for doesn’t exist or has{" "}
                  <br /> been moved. Here are some helpful links.
                </p>
              </div>

              <Link to="/" className="btn btn-primary trans03 mt-auto">
                Get Service
                <span>
                  <FaArrowTrendUp />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
};

export default NotFound;
