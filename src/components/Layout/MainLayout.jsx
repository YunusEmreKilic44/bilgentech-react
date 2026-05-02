import { Outlet } from "react-router";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="main-layout min-h-screen">
      <Header />
      <main className="content-wrapper px-4 py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
