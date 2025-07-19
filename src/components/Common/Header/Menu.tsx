import { Link } from "react-router-dom";
import HederContent from "../../../content/HederContent";

const Menu = () => {
  return (
    <>
      <div className="container-lg">
        <header className="d-flex flex-wrap justify-content-center">
          <Link
            to="/"
            className="d-flex align-items-center mb-0 me-auto text-dark text-decoration-none"
          >
            <img
              className="img-fluid"
              src={HederContent.header.logo}
              alt={HederContent.header.title}
            />
          </Link>
          <ul className="nav d-none d-lg-flex align-items-center">
            {HederContent.menu.map((data, index) => (
              <li key={index} className="nav-item">
                <Link to={data.url} className="nav-link">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </>
  );
};

export default Menu;
