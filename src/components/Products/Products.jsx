import { useEffect, useReducer } from "react";
import AddProductForm from "./AddProductForm";
import ProductCard from "./ProductCard";
import Modal from "./../UI/Modal";
import "./Products.css";
import { initialState, reducerFunction } from "./productReducer";

// Ürünlerle ilgili ana parent component
const Products = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_PRODUCTS", products: data }))
      .catch((err) => console.log(err))
      .finally(() => dispatch({ type: "CLOSE_LOADING" }));
  }, []);

  const addNewProduct = (newProducts) => {
    dispatch({ type: "ADD_NEW_PRODUCTS", newProducts });
  };

  const deleteProduct = (productId) => {
    dispatch({ type: "DELETE_PRODUCT", productId: productId });
  };

  return (
    <div className="products">
      <AddProductForm
        addNewProduct={addNewProduct}
        setIsShowModal={() => dispatch({ type: "OPEN_MODAL" })}
      />
      <div className="products-wrapper">
        {state.isLoading && <b>Ürünler Yükleniyor</b>}
        {state.products.map((product) => (
          <ProductCard
            key={product.id}
            myImage={product.image}
            title={product.title}
            price={product.price}
            desc={product.description}
            id={product.id}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      {state.isShowModal && (
        <Modal
          title="Form Hatası"
          description="Inputlar boş geçilemez!"
          onCloseModal={() => dispatch({ type: "CLOSE_MODAL" })}
        />
      )}
    </div>
  );
};

export default Products;
