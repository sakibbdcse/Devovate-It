import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="py_100 banner_height banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <h1 className="fw-bold main_title">
                Best <span className="animate-text">Software Development</span>{" "}
                Firm
                <span className="fw-light"> In Bangladesh</span>
                <span className="fw-light"> Building</span>{" "}
                <span style={{ color: "#090a4c" }}>Future-Ready Solutions</span>
              </h1>
              <p className="my-4 my-md-5 fs-5">
                Devovate IT is renowned worldwide for its flawless customer
                experience, solidifying our position among the top software
                development companies globally.
              </p>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="position-relative my-5 my-xl-0">
                <img
                  src="/assets/images/softwaredevcompanyphoto.jpg"
                  alt="Software Development Company"
                  className="rounded-5 img-fluid"
                />
                <div className="position-absolute start-50 top-50 translate-middle">
                  <a
                    href="/"
                    rel="nofollow"
                    className="vdo-link align-items-center bg-white d-flex justify-content-center rounded-circle play_button pulse-anim"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                    >
                      <path
                        d="M13.5,0,27,23H0Z"
                        transform="translate(23) rotate(90)"
                        fill="#090a4c"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="position-absolute banner_shape move_top-anim z-n1 ">
                  <img
                    style={{ width: "90%", height: "90%" }}
                    src="/assets/images/shape-1.png"
                    alt="background circle shape"
                  />
                </div>
                <div className="p-3 position-absolute banner_experience text-center text-white move_bottom-anim">
                  <div className="fs-1 fw-bold">100+</div>
                  <div>Completed Project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
