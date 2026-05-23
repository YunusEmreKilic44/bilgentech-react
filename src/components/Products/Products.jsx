import { useEffect, useReducer } from "react";
import AddProductForm from "./AddProductForm";
import ProductCard from "./ProductCard";
import Modal from "./../UI/Modal";
import "./Products.css";
import { initialState, reducerFunction } from "./productReducer";
import { useGetProductsQuery } from "../../redux/api/fakeStoreApi";

// Ürünlerle ilgili ana parent component
const Products = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const {
    data: products = [],
    error,
    isError,
    isLoading,
    isSuccess,
  } = useGetProductsQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "GET_PRODUCTS", products });
      dispatch({ type: "CLOSE_LOADING" });
    }

    if (isError) {
      dispatch({ type: "CLOSE_LOADING" });
    }
  }, [dispatch, isError, isSuccess, products]);

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
        {(state.isLoading || isLoading) && <b>Ürünler Yükleniyor</b>}
        {error && <b>Urunler yuklenirken hata olustu</b>}
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
