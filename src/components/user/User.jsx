import React, { useState } from "react";
import { useDeleteUserMutation } from "../../redux/userApi";
import { motion } from "framer-motion";
const Product = ({ data, bg, setEdit, setId }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const handleUserDelete = (id) => {
    deleteUser(id);
  };
  const productItems = data?.map((item) => (
    <div key={item?.id} style={{ background: `${bg}` }} className="user__card">
      <div className="user__img">
        <img src={item?.image} alt={item?.title} />
      </div>
      <div className="user__heading">
        <h3 className="user__title">
          {item?.fname} {item?.lname}
        </h3>
      </div>
      <h4 className="user__age"> {item?.age} years old</h4>
      <p className="user__email">{item?.email}</p>
      <div className="btns">
        <button disabled={isLoading} onClick={() => handleUserDelete(item?.id)}>
          {isLoading ? "Loading..." : "Delete"}
        </button>
        <button onClick={() => (setEdit((p) => !p), setId(item?.id))}>
          Edit
        </button>
      </div>
    </div>
  ));
  return (
    <motion.div
      initial={{ transform: "scale(.5)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(.3)", transition: { duration: 0.1 } }}
      className="user__wrapper"
    >
      {productItems}
    </motion.div>
  );
};

export default Product;
