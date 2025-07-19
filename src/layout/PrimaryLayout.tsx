import { Outlet } from "react-router-dom";
import Heder from "../components/Common/Header/Heder";
import Footer from "../components/Common/Footer/Footer";

const PrimaryLayout = () => {
  return (
    <>
      <Heder />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
