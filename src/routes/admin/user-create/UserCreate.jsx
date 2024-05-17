import React, { useState, useEffect } from "react";
import { useCreateUserMutation } from "../../../redux/userApi";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const initialState = {
  fname: "",
  lname: "",
  age: "",
  email: "",
  addres: "",
};

const UserCreate = () => {
  const [newUser, setNewUser] = useState(initialState);
  const [createNewUser, { isLoading, isSuccess }] = useCreateUserMutation();

  useEffect(() => {
    if (isSuccess) {
      setNewUser(initialState);
      toast.success("New user created successfully");
    }
  }, [isSuccess]);
  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    createNewUser(newUser);
  };

  return (
    <motion.form
      initial={{ transform: "scale(.5)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(.3)", transition: { duration: 0.1 } }}
      onSubmit={handleNewUserSubmit}
      className="create__product__form"
    >
      <label htmlFor="fname">Last Name *</label>
      <input
        value={newUser.fname}
        onChange={(e) => setNewUser((p) => ({ ...p, fname: e.target.value }))}
        type="text"
        placeholder="Last Name *"
        id="fname"
        required
      />
      <label htmlFor="lname">First Name *</label>
      <input
        value={newUser.lname}
        onChange={(e) => setNewUser((p) => ({ ...p, lname: e.target.value }))}
        type="text"
        placeholder="First Name *"
        id="lname"
        required
      />
      <label htmlFor="age">Age *</label>
      <input
        value={newUser.age}
        onChange={(e) => setNewUser((p) => ({ ...p, age: e.target.value }))}
        type="number"
        placeholder="Age *"
        id="age"
        required
      />
      <label htmlFor="email">Email *</label>
      <input
        value={newUser.email}
        onChange={(e) => setNewUser((p) => ({ ...p, email: e.target.value }))}
        type="email"
        placeholder="Email *"
        id="email"
        required
      />
      <label htmlFor="addres">Addres *</label>
      <textarea
        value={newUser.addres}
        onChange={(e) => setNewUser((p) => ({ ...p, addres: e.target.value }))}
        name="addres"
        rows={4}
        id="addres"
        placeholder="Addres *"
        required
      ></textarea>
      <button disabled={isLoading}>{isLoading ? "Loading..." : "Add"}</button>
    </motion.form>
  );
};

export default UserCreate;
