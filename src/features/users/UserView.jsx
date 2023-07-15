import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "./usersSlice";
import { Link } from "react-router-dom";

export default function UserView() {
  const { isLoading, users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  console.log(users);
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              const { id, name, email } = user;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <Link to="/edit-book" state={{ id, name, email }}>
                      <button>edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        // handleDelete(id);
                      }}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
