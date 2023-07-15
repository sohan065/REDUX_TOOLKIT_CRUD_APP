import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BookView from "../features/books/BookView";
import AddBook from "../features/books/AddBook";
import EditBook from "../features/books/EditBook";
import AddUser from "../features/users/AddUser";
import UserView from "../features/users/UserView";
export default function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BookView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/show-user" element={<UserView />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
