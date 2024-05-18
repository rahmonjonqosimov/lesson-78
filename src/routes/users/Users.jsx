import React from "react";
import User from "../../components/user/User";
import { useGetUserQuery } from "../../redux/userApi";
import UserLoading from "../../components/user-loading/UserLoading";
const Users = () => {
  const { data, isLoading } = useGetUserQuery();
  return <>{isLoading ? <UserLoading /> : <User btn={false} data={data} />}</>;
};

export default Users;
