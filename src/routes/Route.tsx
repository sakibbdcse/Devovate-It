import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PrimaryLayout from "../layout/PrimaryLayout";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default Route;
