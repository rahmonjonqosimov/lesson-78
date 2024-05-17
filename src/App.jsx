import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Auth from "./components/auth/Auth";
import Admin from "./routes/admin/Admin";
import Login from "./routes/login/Login";
import ProductCreate from "./routes/admin/product-create/ProductCreate";
import ProductManager from "./routes/admin/product-manager/ProductManage";
import UserCreate from "./routes/admin/user-create/UserCreate";
import UserManager from "./routes/admin/user-manager/UserManage";
import "./sass/main.scss";
import Navbar from "./components/navbar/Navbar";
import Users from "./routes/users/Users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="product-create" element={<ProductCreate />} />
            <Route path="product-manage" element={<ProductManager />} />
            <Route path="user-create" element={<UserCreate />} />
            <Route path="user-manage" element={<UserManager />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
