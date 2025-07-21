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
              <p className="my-4 my-md-5 info_text">
                Devovat It has a global reputation for up to scratch customer
                experience which marks us as one of the best software
                development companies in the world.
              </p>
              <div
                className="d-block wow fadeInUp"
                data-wow-delay="0.6s"
                // style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
              >
                <div className="align-items-center d-flex flex-wrap">
                  <img src="asset/img/certificate/iso.png" alt="ISO" />
                  <img src="asset/img/certificate/basis.png" alt="Basis" />
                  <img src="asset/img/certificate/bacco.png" alt="Bacco" />
                  <img
                    src="asset/img/certificate/envato.png"
                    className="ms-2"
                    alt="Envato"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="position-relative my-5 my-xl-0">
                <img
                  src="asset/img/bdtask-software-development-company.jpg"
                  alt="Bdtask Software Development Company"
                  className="rounded-5 img-fluid wow fadeInLeft"
                  //   style="visibility: visible; animation-name: fadeInLeft;"
                />
                <div className="position-absolute start-50 top-50 translate-middle">
                  <a
                    href="https://www.youtube.com/watch?v=2RG0iyawseA"
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
                        fill="#29b841"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="position-absolute banner_shape move_top-anim zm-one">
                  <img
                    src="asset/img/shape-1.png"
                    alt="background circle shape"
                  />
                </div>
                <div className="p-4 position-absolute banner_experience text-center text-white move_bottom-anim">
                  <div className="fs-1 fw-bold">10+</div>
                  <div>Years of Experience</div>
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
