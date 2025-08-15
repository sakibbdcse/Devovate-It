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
  realEstate: SolutionItem[];
  travel: SolutionItem[];
};
const OursolutionsContent: OurSolutions = {
  solutions: [
    { title: "Business", id: "business" },
    { title: "Health", id: "health" },
    { title: "Education", id: "education" },
    { title: "E-commerce", id: "ecommerce" },
    { title: "Finance", id: "finance" },
    { title: "Real Estate", id: "real-estate" },
    { title: "Travel", id: "travel" },
  ],
  business: [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ],
  health: [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ],
  education: [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ],
  ecommerce: [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ],
  finance: [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ],
  realEstate: [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ],
  travel: [
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
    { icon: "", title: "", description: "" },
  ],
};

export default OursolutionsContent;
