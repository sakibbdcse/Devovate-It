import "./faqTop.css";
const FaqTop = () => {
  return (
    <>
      <div className="col-lg-10 mx-auto text-center">
        <div className="mb-4">
          <ul className="nav d-inline-block faq-top-ul br-8">
            <li className="d-inline-block mr-1 py-1 px-1" role="presentation">
              <button
                className="nav-link bg-body-secondary py-1 px-3 overflow-hidden fw-medium text-color-theme rounded-2"
                type="button"
              >
                All
              </button>
            </li>
            <li className="d-inline-block mr-1" role="presentation">
              <button
                className="nav-link bg-body-secondary py-1 px-3 overflow-hidden fw-medium text-color-theme rounded-2"
                type="button"
              >
                Full-Stack Developer
              </button>
            </li>
            <li className="d-inline-block mr-1" role="presentation">
              <button
                className="nav-link bg-body-secondary py-1 px-3 overflow-hidden fw-medium text-color-theme rounded-2"
                type="button"
              >
                Web Design
              </button>
            </li>

            <li className="d-inline-block mr-1" role="presentation">
              <button
                className="nav-link bg-body-secondary py-1 px-3 overflow-hidden fw-medium text-color-theme rounded-2 active"
                type="button"
              >
                Web Developer
              </button>
            </li>
            <li className="d-inline-block mr-1" role="presentation">
              <button
                className="nav-link bg-body-secondary py-1 px-3 overflow-hidden fw-medium text-color-theme rounded-2"
                type="button"
              >
                Graphics Designer
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FaqTop;
