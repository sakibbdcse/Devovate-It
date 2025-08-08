import { MdArrowOutward } from "react-icons/md";
import "./cta.css";
const Cta = () => {
  return (
    <>
      <div className="container my-3">
        <div className="cta-bg position-relative overflow-hidden br-8 mt-0">
          <img
            className="cta-shape position-absolute"
            src="/assets/images/goal-shape-left.svg"
            alt=""
          />
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <h2 className="fs-3 fw-bold lh-sm text-white pb-2">
                  Grownup Your Business Contact Us Today
                </h2>
                <div>
                  <form>
                    <div className="cta-mail position-relative z-1 mr-2">
                      <input
                        className="px-3 py-2 text-black w-100"
                        type="email"
                        placeholder="Email Address"
                      />
                      <div className="cta-mail-btn">
                        <div className="w-100 text-uppercase">
                          <button className="subscribe-btn w-100 text-center text-white trans03 rounded-5">
                            <span>Subscribe Now</span>
                            <span className="btn-icon">
                              <MdArrowOutward />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative z-1">
                <img
                  className="subscriptions-img position-absolute"
                  src="/assets/images/subcriptions-img.png"
                  alt=""
                />
                <div>
                  <img
                    className="position-absolute subscriptions-shape"
                    src="/assets/images/subcription-iner-shape.png"
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

export default Cta;
