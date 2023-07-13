import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  buyBooks,
  deleteBooks,
  searchBooks,
} from "../features/books/bookSlice";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const books = useSelector((state) => state.booksReducer.filteredBooks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBuy = (id) => {
    dispatch(buyBooks(id));
    navigate("/");
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
              <td>Stock</td>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author, stock } = book;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <button>{stock}</button>

                      <button
                        onClick={() => {
                          handleBuy(id);
                        }}>
                        buy
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
