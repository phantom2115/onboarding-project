import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-[1440px] px-3">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
