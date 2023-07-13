import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuid(),
      title: "React",
      author: "sohan",
      price: 10,
      stock: 20,
    },
    {
      id: uuid(),
      title: "Redux",
      author: "rahman",
      price: 10,
      stock: 20,
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
    buyBooks: (state, action) => {
      const id = action.payload;
      const bookIndex = state.books.findIndex((book) => book.id === id);

      if (bookIndex !== -1) {
        const updatedBooks = [...state.books];
        updatedBooks[bookIndex] = {
          ...updatedBooks[bookIndex],
          stock: updatedBooks[bookIndex].stock - 1,
        };
        return {
          ...state,
          books: updatedBooks,
        };
      }

      return state;
    },
  },
});

export const {
  showBooks,
  addBooks,
  deleteBooks,
  editBooks,
  searchBooks,
  buyBooks,
} = bookSlice.actions;

export default bookSlice.reducer;
