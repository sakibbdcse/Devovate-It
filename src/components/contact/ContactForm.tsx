import { Link } from "react-router-dom";
import "./contactForm.css";
import { FaArrowTrendUp } from "react-icons/fa6";
const ContactForm = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="py-2 px-3 br-8 gray-bg mb-3">
          <h3 className="fs-2 lh-2 text-black pb-2 m-0">Send us a Message</h3>
          <p className="text-gray fs-6 lh-sm pb-4 m-0">
            Have questions or need assistance? We're here to help! Whether{" "}
            <br /> you're exploring solutions, looking for a consultation, or
            need.
          </p>
          <div>
            <div className="row">
              <div className="col-lg-6 mb-2">
                <input
                  className="w-100 text-black rounded-2 px-3 h-40"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="col-lg-6 mb-2">
                <input
                  className="w-100 text-black rounded-2 px-3 h-40"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-lg-6 mb-2">
                <input
                  className="w-100 text-black rounded-2 px-3 h-40"
                  type="Email"
                  placeholder="Email"
                />
              </div>
              <div className="col-lg-6 mb-2">
                <input
                  className="w-100 text-black rounded-2 px-3 h-40"
                  type="text"
                  placeholder="Number"
                />
              </div>
              <div className="col-lg-12 mb-2">
                <input
                  className="w-100 text-black rounded-2 px-3 h-40"
                  type="text"
                  placeholder="subject"
                />
              </div>
              <div className="col-lg-12 mb-2">
                <textarea
                  className="w-100 text-black rounded-2 px-3 h-120"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-lg-12 text-center my-1">
                <Link
                  to="/"
                  className="btn btn-primary trans03 mt-auto text-center"
                >
                  Submit Now
                  <span>
                    <FaArrowTrendUp />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
