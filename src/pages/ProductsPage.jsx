import Products from "../components/Products/Products";
import Header from "../components/Layout/Header";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Header />
      <div className="mx-auto">
        <Products />
      </div>
    </div>
  );
};

export default ProductsPage;
