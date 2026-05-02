import { Outlet } from "react-router";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
