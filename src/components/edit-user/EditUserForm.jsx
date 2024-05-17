import React, { useState, useEffect } from "react";
import { useGetSingleUserQuery } from "../../redux/userApi";

const initialState = {
  fname: "",
  lname: "",
  age: "",
  email: "",
  addres: "",
};

const EditUserForm = ({ edit, setEdit, id }) => {
  //   useEffect(() => {
  //     const { data } = useGetSingleUserQuery(id);
  //     console.log(data);
  //   }, [id]);

  const [newUser, setNewUser] = useState(initialState);
  return (
    <form className={`edit__form ${edit ? "show" : ""}`}>
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
      <button>Edit</button>
      <button
        type="button"
        onClick={() => setEdit((p) => !p)}
        style={{ marginTop: "10px" }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
