import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterContent = {
  logo: "/assets/images/logo.png",
  location: "Uttara, Dhaka, Bangladesh",
  contact: [
    {
      name: "Motalab",
      designation: "CEO",
      email: "@devovateit.com",
      phone: "+880 123 456 7890",
    },
    {
      name: "Motalab",
      designation: "CEO",
      email: "@devovateit.com",
      phone: "+880 123 456 7890",
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
