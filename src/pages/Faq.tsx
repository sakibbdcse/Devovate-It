import Breadcrumb from "../components/Common/breadcrumb/Breadcrumb";
import Cta from "../components/Common/cta/Cta";
import Faq_top from "../components/faq/Faq_top";

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
          <Faq_top />
        </div>
      </div>
      <Cta />
    </>
  );
};

export default Faq;
