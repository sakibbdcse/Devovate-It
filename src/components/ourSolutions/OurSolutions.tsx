import { Link } from "react-router-dom";
import SectionDivider from "../Common/SectionDivider";
import "./oursolutions.css";
import OursolutionsContent from "../../content/OursolutionsContent";
import { useState } from "react";
const OurSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <SectionDivider
        sectionName="Our Solutions"
        sectionSlug="We deliver timely solutions for every business. Find yours and climb to success"
      />
      <div className="container">
        <div className="row">
          <ul className="justify-content-center mb-5 nav nav-pills product_pills">
            {OursolutionsContent.solutions.map((data, index) => (
              <li key={index} className="nav-item" role="presentation">
                <button
                  className={`nav-link px-4 py-2 rounded-0 ${
                    activeTab === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {data.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row g-3">
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="col-xl-4 col-md-6">
                    <Link
                      to="/"
                      target="_blank"
                      className="bg_grad p-4 align-items-start d-flex product_link"
                    >
                      <div className="d-block">
                        <img
                          src="/assets/images/Sales-ERP.webp"
                          className="product_icon"
                          alt="ERP"
                        />
                      </div>
                      <div className="d-block ms-4">
                        <p className="mb-2 fw_500 fs-16 lh-sm">ERP</p>
                        <p className="mb-0 fs-14">
                          Business ERP Solution Product Shop Company Management
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
