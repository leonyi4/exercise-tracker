import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const Layout = () => {
  return (
    <div className=" dark:bg-[black]">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
