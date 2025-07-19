import { RouterProvider } from "react-router-dom";
import Route from "./routes/Route";

const App = () => {
  return (
    <>
      <RouterProvider router={Route} />
    </>
  );
};

export default App;
