import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ToastContainer } from "react-toastify";

import MainLayout from "./components/Layout/MainLayout";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import CartPages from "./pages/CartPages";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const AdminDashboardPage = lazy(() => import("./pages/AdminDashboardPage"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: (
        <ProtectedRoute roles={["admin", "moderator"]}>
          <AdminDashboardPage />
        </ProtectedRoute>
      ),
    },
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
          path: "/product-detail/:productId",
          element: <ProductDetailPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense fallback={<span>Sayfa Yükleniyor...</span>}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
