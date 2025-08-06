import { Link, useLocation } from "react-router-dom";
import HederContent from "../../../content/HederContent";
import { stack as Menu } from "react-burger-menu";
import { useState } from "react";
import "./Menu.css";
const NavMenu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-lg my-3">
      <header className="d-flex flex-wrap justify-content-center align-items-center">
        <Link
          to="/"
          className="d-flex align-items-center mb-0 me-auto text-dark text-decoration-none"
        >
          <img
            className="img-fluid"
            src={HederContent.header.logo}
            alt={HederContent.header.title}
            style={{ height: "40px" }}
          />
        </Link>

        <ul className="nav d-none d-lg-flex align-items-center">
          {HederContent.menu.map((data, index) => (
            <li key={index} className="nav-item">
              <Link
                to={data.url}
                className={`nav-link ${
                  location.pathname === data.url ? "active" : ""
                }`}
              >
                {data.name}
              </Link>
            </li>
          ))}
          <Link target="_blank" className="btn btn-sm btn-primary" to="http://">
            Book Appointment
          </Link>
        </ul>

        <div className="d-block d-lg-none align-items-center position-relative">
          <Menu
            right
            isOpen={isOpen}
            onStateChange={({ isOpen }: { isOpen: boolean }) =>
              setIsOpen(isOpen)
            }
            id={"burger-menu"}
            className="berger-menu-customs"
          >
            {HederContent.menu.map((data, index) => (
              <Link
                key={index}
                to={data.url}
                className={`menu-item ${
                  location.pathname === data.url ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {data.name}
              </Link>
            ))}
          </Menu>
        </div>
      </header>
    </div>
  );
};

export default NavMenu;
