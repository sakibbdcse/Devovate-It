import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PrimaryLayout from "../layout/PrimaryLayout";
import About from "../pages/About";
import Service from "../pages/Service";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";
import Faq from "../pages/Faq";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default Route;
