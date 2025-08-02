import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionDivider from "../Common/SectionDivider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Partners from "../../content/Partner";
import "./partnerBrand.css";
import { Link } from "react-router-dom";
const PartnerBrand = () => {
  const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
  };

  return (
    <section className="partner-section py-5 bg-light">
      <SectionDivider
        sectionName="Our Partners"
        sectionSlug="We are proud to collaborate with these amazing partners"
      />

      <div className="container position-relative">
        <Swiper
          {...swiperParams}
          modules={[Pagination, Autoplay]}
          className="partner-swiper py-4"
        >
          {Partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="partner-card d-flex align-items-center justify-content-center p-3 bg-white rounded-3 shadow-sm">
                <Link
                  to={partner.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="img-fluid partner-logo"
                    loading="lazy"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="partner-pagination text-center mt-3"></div>
      </div>
    </section>
  );
};

export default PartnerBrand;
