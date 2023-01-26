import "./Search.scss";
import { useState } from "react";
import Display from "../display/Display";

const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <Display books={books} />
    </div>
  );
};

export default Search;

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(false);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/books/v1/volumes?q=${query}`
//       );
//       const data = await response.json();
//       setBooks(data.items);
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="search">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {error ? (
//         <div className="error">Sorry, there was an error with your search</div>
//       ) : (
//         <Display books={books} />
//       )}
//     </div>
//   );
// };
