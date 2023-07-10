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
      title: "Reducx",
      author: "rahman",
    },
  ],
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
  },
});

export const { showBooks, addBooks, deleteBooks } = bookSlice.actions;

export default bookSlice.reducer;
