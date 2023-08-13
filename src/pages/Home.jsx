import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { buyBooks, searchBooks } from "../features/books/bookSlice";

export default function Home() {
  // const [searchText, setSearchText] = useState("");
  // const filteredBooks = useSelector(
  //   (state) => state.booksReducer.filteredBooks
  // );
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleBuy = (id) => {
  //   dispatch(buyBooks(id));
  //   navigate("/");
  // };
  // const handleSearch = () => {
  //   dispatch(searchBooks(searchText));
  // };
  // useEffect(() => {
  //   dispatch(searchBooks(searchText));
  // }, [searchText]);
  // useEffect(() => {
  //   // Reload filteredBooks when it gets updated
  //   dispatch(searchBooks(searchText));
  // }, [filteredBooks]); // Add filteredBooks as a dependency
  return (
    <>
      {/* <div>
        <input
          type="text"
          name="searchText"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter book name"
        />
        <button onClick={handleSearch}>Search</button>

        <table>
          <thead>
            <tr>
              <th>ID</th>
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
                      <button onClick={() => handleBuy(id)}>Buy</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div> */}
    </>
  );
}
