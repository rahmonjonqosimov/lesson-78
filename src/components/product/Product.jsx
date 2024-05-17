import React from "react";
import { FaStar } from "react-icons/fa6";
import { useDeleteProductMutation } from "../../redux/productApi";

const Product = ({ data, deleteBtn }) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };
  const productItems = data?.map((item) => (
    <div key={item?.id} className="product__card">
      <div className="product__img">
        <img src={item?.image} alt={item?.title} />
      </div>
      <div className="product__heading">
        <h3 className="product__title">{item?.title}</h3>
        <h4 className="product__price">$ {item?.price}</h4>
      </div>
      <div className="product__rating">
        {Array(Math.round(item?.rating) <= 5 ? Math.round(item?.rating) : 5)
          .fill("")
          .map((_, inx) => (
            <FaStar key={inx} className="product__star" />
          ))}
      </div>
      <p title={item?.description} className="product__desc">
        {item?.description}
      </p>
      {deleteBtn ? (
        <div className="btns">
          <button
            disabled={isLoading}
            onClick={() => handleDeleteProduct(item?.id)}
          >
            {isLoading ? "Loading..." : "Delete"}
          </button>
          <button>Edit</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  ));
  return <div className="product__wrapper">{productItems}</div>;
};

export default Product;
