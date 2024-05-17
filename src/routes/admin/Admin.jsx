import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="admin__dashboard">
      <Sidebar />
      <div className="admin__outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
