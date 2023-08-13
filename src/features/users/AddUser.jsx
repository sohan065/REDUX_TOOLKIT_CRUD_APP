import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeUser } from "./usersSlice";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [user, setUser] = useState({ password: "1234" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(storeUser(user));
    navigate("/show-user");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add User</h1>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={getUserData}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={getUserData}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
