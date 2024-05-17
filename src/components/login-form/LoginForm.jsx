import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Rahmonjon");
  const [password, setPassword] = useState("12345678");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "Rahmonjon" && password.trim() === "12345678") {
      localStorage.setItem(
        "token",
        JSON.stringify("wertyuiopasdfghjklzxcvbnm")
      );
      navigate("/admin/product-create");
      toast.success(`Welcome to admin panel !`);
    } else {
      toast.error(" Username and password are incorrect");
    }
  };
  return (
    <form onSubmit={handleLoginSubmit} className="login__form">
      <label htmlFor="username">Username *</label>
      <input
        value={username}
        onChange={(e) => setUsername((p) => e.target.value)}
        type="text"
        id="username"
        required
      />
      <label htmlFor="password">Password *</label>
      <input
        value={password}
        onChange={(e) => setPassword((p) => e.target.value)}
        type="password"
        id="password"
        required
      />
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
