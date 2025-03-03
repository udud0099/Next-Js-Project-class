"use client";
import React from "react";
import { useSelector } from "react-redux";

const ListUser = () => {
  const userData = useSelector((data) => data.users);
  console.log(userData);

  return (
    <div>
      <h1>ListUser</h1>
      <div>
        {userData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
