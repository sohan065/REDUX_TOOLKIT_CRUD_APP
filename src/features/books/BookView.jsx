import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "./bookSlice";
import { Link } from "react-router-dom";
export default function BookView() {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Author</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {books &&
          books.map((book) => {
            const { id, title, author } = book;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link to="/edit-book" state={{ id, title, author }}>
                    <button>edit</button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(id);
                    }}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
