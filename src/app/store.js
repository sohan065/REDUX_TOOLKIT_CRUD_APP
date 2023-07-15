import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/bookSlice";
import UserReducer from "../features/users/usersSlice";

const store = configureStore({
  reducer: {
    booksReducer: bookReducer,
    userReducer: UserReducer,
  },
});

export default store;
