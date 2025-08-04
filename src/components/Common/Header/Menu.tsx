import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HederContent from "../../../content/HederContent";
import { CiMenuFries } from "react-icons/ci";
import { slide as BurgerMenu } from "react-burger-menu";
import "./Menu.css"; // You can customize the burger menu here

const Menu = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="container-lg">
      <header className="d-flex flex-wrap justify-content-center align-items-center">
        {/* Logo */}
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

        {/* Desktop menu */}
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
        </ul>

        {/* Mobile & Tablet: Burger Icon */}
        <div className="d-block d-lg-none">
          <CiMenuFries
            size={28}
            style={{ cursor: "pointer" }}
            onClick={() => setMenuOpen(true)}
          />
        </div>

        {/* Burger Menu */}
        <BurgerMenu
          right
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          customBurgerIcon={false}
        >
          {HederContent.menu.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              onClick={closeMenu}
              className="menu-item"
            >
              {item.name}
            </Link>
          ))}
        </BurgerMenu>
      </header>
    </div>
  );
};

export default Menu;
