import { Link } from "react-router-dom";
import SectionDivider from "../Common/SectionDivider";
import "./oursolutions.css";
import OursolutionsContent from "../../content/OursolutionsContent";
import { useState } from "react";
type SolutionContentItem = {
  icon: string;
  title: string;
  description: string;
  // add other fields if present in your content
};

const OurSolutions = () => {
  const [activeTab, setActiveTab] = useState<string>("business");
  const activeContent = OursolutionsContent[
    activeTab as keyof typeof OursolutionsContent
  ] as SolutionContentItem[];

  return (
    <>
      <SectionDivider
        sectionName="Our Solutions"
        sectionSlug="We deliver timely solutions for every business. Find yours and climb to success"
      />
      <div className="container">
        <div className="row">
          <ul className="justify-content-center mb-5 nav nav-pills product_pills">
            {OursolutionsContent.solutions.map((solution) => (
              <li key={solution.id} className="nav-item" role="presentation">
                <button
                  className={`nav-link px-4 py-2 rounded-0 ${
                    activeTab === solution.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(solution.id)}
                >
                  {solution.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row g-3">
                {activeContent.map((data, index) => (
                  <div key={index} className="col-xl-4 col-md-6">
                    <Link
                      to="/"
                      target="_blank"
                      className="bg_grad p-4 align-items-start d-flex product_link"
                    >
                      <div className="d-block">
                        <img
                          src={data.icon}
                          className="product_icon"
                          alt={data.title}
                        />
                      </div>
                      <div className="d-block ms-4">
                        <p className="mb-2 fw_500 fs-16 lh-sm">{data.title}</p>
                        <p className="mb-0 fs-14">{data.description}</p>
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
