import "./faqTop.css";
const FaqTop = () => {
  return (
    <>
      <div className="col-lg-8 mx-auto text-center">
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
                It Service
              </button>
            </li>
            <li className="d-inline-block mr-1" role="presentation">
              <button
                className="nav-link bg-body-secondary py-1 px-3 overflow-hidden fw-medium text-color-theme rounded-2"
                type="button"
              >
                Technology
              </button>
            </li>

            <li className="d-inline-block mr-1" role="presentation">
              <button
                className="nav-link bg-body-secondary py-1 px-3 overflow-hidden fw-medium text-color-theme rounded-2 active"
                type="button"
              >
                Cyber security
              </button>
            </li>
            <li className="d-inline-block mr-1" role="presentation">
              <button
                className="nav-link bg-body-secondary py-1 px-3 overflow-hidden fw-medium text-color-theme rounded-2"
                type="button"
              >
                Tech Support
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FaqTop;
