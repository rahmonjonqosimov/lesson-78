import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Users",
      path: "/users",
    },
    {
      id: 3,
      title: "Admin",
      path: "/admin/product-create",
    },
    {
      id: 4,
      title: "Login",
      path: "/login",
    },
  ];

  const links = navItem?.map((el) => (
    <li key={el.id}>
      <NavLink to={el.path}>{el.title}</NavLink>
    </li>
  ));

  return (
    <section className="navbar">
      <Link to={"/"} className="nav__logo">
        LOGO
      </Link>
      <ul className="nav__items">{links}</ul>
    </section>
  );
};

export default Navbar;
