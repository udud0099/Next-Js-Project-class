"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeUser } from "../redux/slice";

const ListUser = () => {
  const userData = useSelector((data) => data.users);
  // console.log(userData);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>ListUser</h1>
      <div>
        {userData.map((item) => (
          <li key={item.id}>
            <span>
              {item.name}{" "}
              <button onClick={() => dispatch(removeUser(item.id))}>D</button>
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
