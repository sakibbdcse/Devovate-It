import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";
const Breadcrumb = () => {
  return (
    <>
      <div
        className="breadcrumb-bg position-relative z-1 overflow-hidden pt-3 pb-4 mb-3"
        style={{
          //   backgroundImage: "url('/assets/images/bradcaump.png')",
          backgroundColor: "#090a4c",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 mb-3">
              <div className="mt-5">
                <h1 className="fs-2 text-white">Our Service</h1>
                <div>
                  <Link className="text-white fs-6 text-decoration-none" to="/">
                    Home
                  </Link>
                  <IoIosArrowForward className="text-white" />
                  <Link className="text-white fs-6 text-decoration-none" to="/">
                    Our Service
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 mb-3 py-6">
              <div className="position-relative">
                <div>
                  <div>
                    <img
                      className="shape-right position-absolute"
                      src="/assets/images/mic-shape-right.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="shape-left position-absolute"
                      src="/assets/images/goal-shape-left.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <img
                    className="w-100 breadcrumb-fan position-absolute"
                    src="/assets/images/fan-sm-shape-middle.svg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="breadcrumb-img position-absolute bottom-0"
                    src="/assets/images/Bradcump-image.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
