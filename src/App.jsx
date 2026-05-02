import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Layout/Header";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/Layout/MainLayout";
import CartPages from "./pages/CartPages";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/cart",
          element: <CartPages />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <div className="p-4">
      <main className="main-content py-4">
        <RouterProvider router={router} />
        <ToastContainer />
      </main>
    </div>
  );
};

export default App;
