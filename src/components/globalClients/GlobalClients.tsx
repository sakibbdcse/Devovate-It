import SectionDivider from "../Common/SectionDivider";

const GlobalClients = () => {
  return (
    <>
      <SectionDivider
        sectionName="Our Clients"
        sectionSlug="our world wide client we work to happy him"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img
              src="/public/assets/images/davovatIT.png"
              className="img-fluid"
              alt="Client Map"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalClients;
