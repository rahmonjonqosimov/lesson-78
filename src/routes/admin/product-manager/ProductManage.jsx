import React from "react";
import Product from "../../../components/product/Product";
import { useGetProductsQuery } from "../../../redux/productApi";
import ProductLoading from "../../../components/product-loading/ProductLoading";
import { motion } from "framer-motion";

const ProductManager = () => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <motion.div
      initial={{ transform: "scale(.5)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(.3)", transition: { duration: 0.1 } }}
    >
      {isLoading ? (
        <ProductLoading />
      ) : (
        <Product data={data} deleteBtn={true} />
      )}
    </motion.div>
  );
};

export default ProductManager;
