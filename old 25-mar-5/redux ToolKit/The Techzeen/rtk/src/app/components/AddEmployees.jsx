"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../rtk/slice";

const AddEmployees = () => {
  const [empName, setEmpName] = useState("");

  const dispatch = useDispatch();

  const dataDispatch = () => {
    dispatch(addEmployee(empName));
  };
  return (
    <div>
      <h1>AddEmployees</h1>
      <input
        value={empName}
        onChange={(e) => setEmpName(e.target.value)}
        type="text"
      />
      <button onClick={dataDispatch}>Add</button>
    </div>
  );
};

export default AddEmployees;
