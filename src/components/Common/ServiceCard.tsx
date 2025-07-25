import { Link } from "react-router-dom";
import "./serviceCard.css";
type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  imgSrc: string;
  link: string;
  isActive: boolean;
  onClick: (index: number) => void;
};
const ServiceCard = ({
  index,
  title,
  description,
  imgSrc,
  link,
  isActive,
  onClick,
}: ServiceCardProps) => {
  return (
    <Link
      to={link}
      target="_blank"
      onClick={() => onClick(index)}
      className={`card product_link  px-5 py-5 h-100 border-0 ${
        index % 2 === 0 ? "bg_grad" : "bg_grad2"
      } bgChangeOnHover ${isActive ? "active" : ""}`}
    >
      <div className="d-block mb-4 position-relative">
        <img
          className="image-fluid"
          src={imgSrc}
          alt={title}
          style={{ height: "70px", width: "70px" }}
        />
      </div>
      <div className="card-body p-0 position-relative">
        <h3 className="card-title fs-5 mb-3 fw-7">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
