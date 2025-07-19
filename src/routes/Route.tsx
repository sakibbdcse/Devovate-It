import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default Route;
