import "./Search.scss";
import { useState } from "react";
import Display from "../display/Display";

const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <Display books={books} />
      </form>
    </div>
  );
};

export default Search;
