import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuid(),
      title: "React",
      author: "sohan",
    },
    {
      id: uuid(),
      title: "Redux",
      author: "rahman",
    },
  ],
  filteredBooks: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBooks: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    editBooks: (state, action) => {
      const { id, title, author } = action.payload;
      const isExist = state.books.filter((book) => book.id === id);
      if (isExist) {
        isExist[0].title = title;
        isExist[0].author = author;
      }
    },
    searchBooks: (state, action) => {
      const searchText = action.payload.toLowerCase();
      if (searchText === null || searchText.length === 0) {
        state.filteredBooks = state.books;
      }
      state.filteredBooks = state.books.filter((book) =>
        book.title.toLowerCase().startsWith(searchText)
      );
    },
  },
});

export const { showBooks, addBooks, deleteBooks, editBooks, searchBooks } =
  bookSlice.actions;

export default bookSlice.reducer;
