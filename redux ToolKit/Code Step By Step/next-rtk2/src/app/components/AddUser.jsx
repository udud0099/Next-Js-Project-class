"use client";
import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    // console.log(name);
    dispatch(addUser(name));
    setName("");
  };
  return (
    <div>
      <h1>AddUser</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={userDispatch}>add user</button>
      </div>
    </div>
  );
};

export default AddUser;
