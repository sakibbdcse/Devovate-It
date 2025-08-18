type Solution = {
  title: string;
  id: string;
};
type SolutionItem = {
  icon: string;
  title: string;
  description: string;
};
type OurSolutions = {
  solutions: Solution[];
  business: SolutionItem[];
  health: SolutionItem[];
  education: SolutionItem[];
  ecommerce: SolutionItem[];
  finance: SolutionItem[];
  travel: SolutionItem[];
};
const OursolutionsContent: OurSolutions = {
  solutions: [
    { title: "Business", id: "business" },
    { title: "Health", id: "health" },
    { title: "Education", id: "education" },
    { title: "E-commerce", id: "ecommerce" },
    { title: "Finance", id: "finance" },
    { title: "Travel", id: "travel" },
  ],
  business: [
    {
      icon: "/assets/images/Sales-ERP.webp",
      title: "ERP Solutions",
      description: "Streamline business operations with a unified ERP system",
    },
    {
      icon: "/assets/icon/jet.png",
      title: "Flight Booking",
      description: "Flight Booking Software",
    },
  ],
  health: [
    {
      icon: "/assets/icon/doctor.png",
      title: "Online Doctor",
      description: "Online Doctor check-up",
    },
    {
      icon: "/assets/icon/hospital.png",
      title: "Hospital Management",
      description: "Hospital management applications",
    },
    {
      icon: "/assets/icon/hospital-location.png",
      title: "Pharmacy",
      description: "Pharmacy purses medicine online",
    },
  ],
  education: [{ icon: "", title: "edu", description: "saer" }],
  ecommerce: [
    {
      icon: "/assets/icon/online-shop.png",
      title: "Online shop",
      description: "online shopping mall",
    },
  ],
  finance: [
    {
      icon: "/assets/icon/money.png",
      title: "Real State",
      description: "Real State financial",
    },
  ],
  travel: [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ],
};

export default OursolutionsContent;
