import { useState } from "react";
import "./faqBottom.css";
const FaqBottom = () => {
  const [openKey, setOpenKey] = useState<number | null>(null);
  const toggleFaq = (key: number) => {
    setOpenKey(openKey === key ? null : key);
  };
  return (
    <>
      <div className="accordion">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="mr-8 bg-white faq_box_shadow overflow-hidden faq_border mb-2"
          >
            <h2 className="m-0">
              <button
                className={`accordion-button ${
                  openKey === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleFaq(index)}
              >
                What types of IT services do you offer?
                <span>
                  <i
                    className={`fa-regular fa-angle-${
                      openKey === index ? "up" : "down"
                    }`}
                  ></i>
                </span>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openKey === index ? "show" : ""
              }`}
            >
              <div className="accordion-body">
                <p>
                  We prioritize security by implementing multi-layered
                  protection strategies, including firewalls, encryption, threat
                  monitoring.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqBottom;
