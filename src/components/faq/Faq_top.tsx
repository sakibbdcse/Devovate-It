const Faq_top = () => {
  return (
    <>
      <div className="col-lg-8 mx-auto text-center">
        <div className="vl-faq-tab mb-48">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link" type="button">
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" type="button">
                It Service
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" type="button">
                Technology
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button className="nav-link active" type="button">
                Cyber security
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" type="button">
                Tech Support
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Faq_top;
