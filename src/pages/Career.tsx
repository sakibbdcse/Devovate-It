import { Link } from "react-router-dom";
import Breadcrumb from "../components/Common/breadcrumb/Breadcrumb";

const Career = () => {
  return (
    <>
      <Breadcrumb pageTitle="Career" pageName="career" pageUrl="/career" />
      <div className="container">
        <h1 className="text-center my-5">Join Our Team</h1>
        <p className="text-center">
          We are always looking for talented individuals to join our team. If
          you are passionate about technology and want to make a difference, we
          would love to hear from you!
        </p>
        <p className="text-center">
          Please send your resume and cover letter to{" "}
          <Link to="mailto">submit</Link>
        </p>
      </div>
    </>
  );
};

export default Career;
