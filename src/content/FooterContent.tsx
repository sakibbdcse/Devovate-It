import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterContent = {
  logo: "/assets/images/foooter-logo.png",
  location: "Uttara, Dhaka, Bangladesh",
  email: "devovateit@gmail.com",
  phone: "+880 123 456 7890",
  contact: [
    {
      name: "Motalab",
      designation: "CEO",
      email: "ceo.motalab@devovateit.com",
      phone: "+880 123 456 7890",
    },
    {
      name: "Sakib",
      designation: "Full Stack Developer",
      email: "dev.sakib@devovateit.com",
      phone: "+880 176 619 5363",
    },
  ],
  socialLinks: [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/devovateit",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/devovateit",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.linkedin.com/company/devovateit/",
    },
  ],
};

export default FooterContent;
