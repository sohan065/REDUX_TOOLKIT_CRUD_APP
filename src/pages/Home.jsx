import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBooks, searchBooks } from "../features/books/bookSlice";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const books = useSelector((state) => state.booksReducer.filteredBooks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };
  const handleSearch = () => {
    dispatch(searchBooks(searchText));
  };
  useEffect(() => {
    dispatch(searchBooks(searchText));
  }, [searchText]);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <label htmlFor="searchtext">Search Book :</label>
              <input
                type="text"
                name="searchText"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="book name"
              />
              <button onClick={handleSearch}>search</button>
            </tr>
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
      </div>
    </>
  );
}
