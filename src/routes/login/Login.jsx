import React from "react";
import LoginForm from "../../components/login-form/LoginForm";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <LoginForm />
    </motion.div>
  );
};

export default Login;
