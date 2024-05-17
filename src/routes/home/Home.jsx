import React from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from "../../redux/productApi";
import ProductLoading from "../../components/product-loading/ProductLoading";
import { motion } from "framer-motion";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      {isLoading ? (
        <ProductLoading />
      ) : (
        <Product data={data} deleteBtn={false} />
      )}
    </motion.div>
  );
};

export default Home;
