import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBooks } from "./bookSlice";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
export default function EditBook() {
  const location = useLocation();
  const [id] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateBook = { id, title, author };
    dispatch(editBooks(updateBook));
    navigate("/show-books");
  };
  return (
    <div className="container-flud">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label>Author:</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="success" className="w-50">
          Update Book
        </Button>
      </Form>
    </div>
  );
}
