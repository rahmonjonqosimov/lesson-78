import React from "react";
import User from "../../components/user/User";
import { useGetUserQuery } from "../../redux/userApi";
const Users = () => {
  const { data, isLoading } = useGetUserQuery();
  return (
    <>
      <User data={data} />
    </>
  );
};

export default Users;
