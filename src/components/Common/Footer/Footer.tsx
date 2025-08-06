import { Link } from "react-router-dom";
import "./footer.css";
import FooterContent from "../../../content/FooterContent";
import { IoIosSend } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <footer className="position-relative">
        <div className="footer_shape">
          <img
            src="/assets/images/footer-bg.webp"
            className="w-100"
            alt="Footer Background"
          />
        </div>
        <div className="footer_wrapper">
          <div className="container">
            <div className="row pb-5 pt-5 bottom_line position-relative">
              <div className="col-xl-4 footer-column">
                <ul className="nav flex-column mb-5 mb-xl-0">
                  <li className="nav-item mb-4">
                    <Link to="/">
                      <img
                        src={FooterContent.logo}
                        alt="Devovat ItLogo White"
                      />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <p className="text-muted w-75">
                      Best Software Development Company To Architect The Dream
                      For Next Generation.
                    </p>
                  </li>

                  <li>
                    <ul className="d-flex list-unstyled mt-4">
                      {FooterContent.socialLinks.map((data, i) => (
                        <li key={i}>
                          <Link
                            className="align-items-center d-flex justify-content-center me-2 text-decoration-none text-white social_icon"
                            to={data.url}
                            target="_blank"
                          >
                            {data.icon}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Address Column */}
              <div className="col-xl-3 col-md-6 footer-column">
                <ul className="nav flex-column">
                  <li className="nav-item mb-4">
                    <span className="d-block footer-title fs-17 pb-2 text-white">
                      Address
                    </span>
                  </li>
                  <li className="nav-item">
                    <p className="text-muted fw-bold mb-2">Office Locations</p>
                  </li>
                  <li className="nav-item">
                    <p className="text-muted mb-2">{FooterContent.location}</p>
                  </li>
                  <li className="nav-item">
                    <p className="text-muted fw-bold mb-1">Email</p>
                  </li>
                  <li className="nav-item">
                    <p className="text-muted mb-1">{FooterContent.email}</p>
                  </li>
                  <li className="nav-item">
                    <p className="text-muted fw-bold mb-1">Phone</p>
                  </li>
                  <li className="nav-item">
                    <p className="text-muted mb-1">{FooterContent.phone}</p>
                  </li>
                </ul>
              </div>

              {/* Phone Column */}
              <div className="col-xl-4 offset-xl-1 col-md-6 footer-column">
                <ul className="nav flex-column">
                  <li className="nav-item mb-4">
                    <span className="d-block footer-title fs-17 pb-2 text-white">
                      Contact Info
                    </span>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-6">
                    <ul className="nav">
                      <li className="nav-item">
                        {FooterContent.contact.map((contact, index) => (
                          <p className="text-muted" key={index}>
                            {contact.name} - {contact.designation}{" "}
                            {contact.email} {contact.phone}
                          </p>
                        ))}
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="nav">
                      <li className="nav-item"></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-5 d-none d-xl-flex">
              <div className="col-md-3 text-muted">
                <span className="footer-title text-white">Subscriptions</span>
                <form>
                  <input
                    type="email"
                    className="text-white input-bg border-radius-left py02"
                  />
                  <button
                    type="submit"
                    style={{ border: "none" }}
                    className="bg-warning border-radius-right py-1 border-none"
                  >
                    <IoIosSend
                      size={24}
                      className="text-black cursor-pointer"
                    />
                  </button>
                </form>
                <strong className="block text-white mt-3">Download App</strong>
                <div className="list-download d-flex items-start gap-2 mt-2">
                  <Link className="cursor-pointer" to="/">
                    <img
                      className="cursor-pointer"
                      src="/assets/images/gg_play.png"
                      alt="Google Play"
                    />
                  </Link>
                  <Link className="cursor-pointer" to="/">
                    <img
                      className="cursor-pointer"
                      src="/assets/images/app_store.png"
                      alt="App Store"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-1">
                <div className="row">
                  {[
                    {
                      title: "Useful Links",
                      links: [
                        ["About Us", "/about-us"],
                        ["Blog", "/"],
                        ["Career", "/"],
                        ["Terms of Use", "/"],
                        ["Privacy Policy", "/"],
                      ],
                    },
                    {
                      title: "Services",
                      links: [
                        ["Custom Software", "/"],
                        ["Web Development", "/"],
                        ["Mobile App Development", "/"],
                        ["UI/UX Design", "/"],
                        ["E-commerce Solutions", "/"],
                        ["Cloud Services", "/"],
                        ["Digital Marketing", "/"],
                      ],
                    },
                    {
                      title: "Support",
                      links: [
                        ["Contact Us", "/"],
                        ["Item Support", "/"],
                      ],
                    },
                  ].map((section, i) => (
                    <div className="col-md-4" key={i}>
                      <ul className="nav flex-column">
                        <li className="nav-item mb-4">
                          <span className="footer-title text-white">
                            {section.title}
                          </span>
                        </li>
                        {section.links.map(([label, href], j) => (
                          <li className="nav-item" key={j}>
                            <Link
                              to={href}
                              className="text-decoration-none text-muted lh-30"
                            >
                              <span className="arrow me-2">→</span>
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-3 midSaleBg">
        <div className="container">
          <div className="text-center text-white">
            {new Date().getFullYear()} © All Rights Reserved by{" "}
            <Link to="/" target="_blank" className="btn btn-sm btn-warning">
              Devovate IT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
