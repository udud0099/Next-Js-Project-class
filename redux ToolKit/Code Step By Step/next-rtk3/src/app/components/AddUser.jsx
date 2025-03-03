"use client";
import React, { useEffect, useState } from "react";

import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const AddUser = () => {
  const [name, setName] = useState("");

  const [name2, setName2] = useState("");
  const [bike, setBike] = useState(false);
  const dispatch = useDispatch();

  const userDispatch = () => {
    // console.log(name);
    dispatch(addUser({ name, name2, bike })); // ✅ Pass an object with all fields

    if (bike) {
      console.log("it is ok");
      localStorage.removeItem("users");
      localStorage.setItem("users", JSON.stringify({ name, name2, bike }));
    } else {
      localStorage.removeItem("users");
    }
    setName("");
    setName2("");
    setBike(false);
  };

  const [ls, setLs] = useState("");
  useEffect(() => {
    setLs(JSON.parse(localStorage.getItem("users")) || "");
    console.log(ls);
  }, []);
  return (
    <div>
      <h1>{ls.name}</h1>
      <input
        type="text"
        defaultValue={ls.name || ""}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <br />
      <h1>AddUser</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Name 2"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={bike} // ✅ Use `checked` for boolean values
            onChange={(e) => setBike(e.target.checked)} // ✅ Use `checked` property
          />
          Has Bike
        </label>
        <button onClick={userDispatch}>add user</button>
      </div>
      <Link href="/removeuser">remove user</Link>
    </div>
  );
};

export default AddUser;
