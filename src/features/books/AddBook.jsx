import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addBooks } from "./bookSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuid(), title: title, author: author };
    dispatch(addBooks(book));
    navigate("/show-books");
  };
  return (
    <div className="container-flud ">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label>Author:</Form.Label>
          <Form.Control
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="author-name"
            required
          />
        </Form.Group>
        <Button type="submit" variant="success" className="w-50">
          Add Book
        </Button>
      </Form>
    </div>
  );
}
