"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

const AddUser = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const userDispatch = () => {
    console.log(name);
    dispatch(addUser(name));
  };
  return (
    <div>
      <h1>AddUser</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch}>add user</button>
    </div>
  );
};

export default AddUser;
