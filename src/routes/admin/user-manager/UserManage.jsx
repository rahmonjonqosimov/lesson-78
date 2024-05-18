import React, { useState } from "react";
import User from "../../../components/user/User";
import { useGetUserQuery } from "../../../redux/userApi";
import EditUserForm from "../../../components/edit-user/EditUserForm";
import UserLoading from "../../../components/user-loading/UserLoading";

const UserManager = () => {
  const { data, isLoading } = useGetUserQuery();
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  return (
    <>
      {isLoading ? (
        <UserLoading />
      ) : (
        <User
          btn={true}
          setId={setId}
          setEdit={setEdit}
          data={data}
          bg={"#fff"}
        />
      )}
      <EditUserForm id={id} setEdit={setEdit} edit={edit} />
      <div
        onClick={() => setEdit((p) => !p)}
        className={edit ? "div" : ""}
      ></div>
    </>
  );
};

export default UserManager;
