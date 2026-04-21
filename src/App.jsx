import Counter from "./components/Counter";
import ProductCard from "./components/Products/ProductCard";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div className="p-4">
      <h1>App Component</h1>
      {/* <LoginPage /> */}
      <RegisterPage />
      {/* <Products /> */}
      {/* <Counter /> */}
    </div>
  );
};

export default App;
