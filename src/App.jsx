import Counter from "./components/Counter";
import ProductCard from "./components/Products/ProductCard";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <div className="p-4">
      <RouterProvider router={router} />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* <Products /> */}
      {/* <Counter /> */}
    </div>
  );
};

export default App;
