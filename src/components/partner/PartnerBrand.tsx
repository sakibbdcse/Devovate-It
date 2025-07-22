import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionDivider from "../Common/SectionDivider";
// import "swiper/swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const PartnerBrand = () => {
  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000, // 3 seconds between slides
      disableOnInteraction: false, // continue autoplay after user interaction
      pauseOnMouseEnter: true, // pause on hover
    },
    loop: true, // enable infinite loop
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
  };

  const partners = [
    {
      id: 1,
      name: "Partner 1",
      logo: "/assets/images/devovat-It-logo.png", // Removed /public as Vite serves from /assets directly
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/assets/images/devovat-It-logo.png",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/assets/images/devovat-It-logo.png",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/assets/images/devovat-It-logo.png",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/assets/images/devovat-It-logo.png",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/assets/images/devovat-It-logo.png",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/assets/images/devovat-It-logo.png",
    },
  ];

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
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="partner-card h-100 d-flex align-items-center justify-content-center p-3 bg-white rounded-3 shadow-sm">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="img-fluid"
                  style={{ maxHeight: "100px", objectFit: "contain" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/assets/images/default-logo.png";
                    (e.target as HTMLImageElement).style.opacity = "0.7";
                  }}
                  loading="lazy"
                />
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
