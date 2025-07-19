import { Link } from "react-router-dom";
import "./NavTopBar.css";
const NavTopBar = () => {
  return (
    <>
      <div className="align-items-center d-flex justify-content-center midSaleBg px-4 py-2 text-white">
        <span className="me-2">Save Extra Cost &amp; Increase Your ROI </span>{" "}
        <Link
          to="/"
          target="_blank"
          className="btn btn-sm btn-warning"
          // style="white-space: nowrap;"
        >
          Grab it now
        </Link>
      </div>
    </>
  );
};

export default NavTopBar;
