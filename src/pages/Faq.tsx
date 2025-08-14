import Breadcrumb from "../components/Common/breadcrumb/Breadcrumb";
import Cta from "../components/Common/cta/Cta";
import FaqBottom from "../components/faq/FaqBottom";
import FaqTop from "../components/faq/FaqTop";

const Faq = () => {
  return (
    <>
      <Breadcrumb
        pageTitle="Frequently Asked Questions"
        pageName="faq"
        pageUrl="/faq"
      />
      <div className="container">
        <h1 className="text-center">Frequently Asked Questions</h1>
        <div className="row">
          <FaqTop />
          <div className="row">
            <div className="col-lg-6">
              <FaqBottom />
            </div>
            <div className="col-lg-6">
              <FaqBottom />
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
};

export default Faq;
