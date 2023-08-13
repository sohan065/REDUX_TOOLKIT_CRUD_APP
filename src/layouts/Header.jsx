import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buyBooks, searchBooks } from "../features/books/bookSlice";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
export default function Header() {
  const [searchText, setSearchText] = useState("");
  const filteredBooks = useSelector(
    (state) => state.booksReducer.filteredBooks
  );
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
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary mt-2">
        <Container fluid>
          <Navbar.Brand href="#">iStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/show-books" className="nav-link">
                Show Books
              </Link>
              <Link to="/add-book" className="nav-link">
                Add Books
              </Link>
              <Link to="/add-user" className="nav-link">
                Add User
              </Link>
              <Link to="/show-user" className="nav-link">
                Show User
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                name="searchText"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Enter book name"
              />
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks &&
            filteredBooks.map((book) => {
              const { id, title, author, stock } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{stock}</td>
                  <td>
                    <Button onClick={() => handleBuy(id)}>Buy</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
