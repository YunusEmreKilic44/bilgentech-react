import ProductCard from "./ProductCard";
import productsData from "../../productsData";
import "./Products.css";
import AddProductForm from "./AddProductForm";

// Ürünlerle ilgili ana parent component
const Products = () => {
  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddProductForm />
      <div className="products-wrapper">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            myImage={product.image}
            title={product.title}
            price={product.price}
            desc={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
