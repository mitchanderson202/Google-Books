import "./Display.scss";

const Display = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books found.</div>;
  }
  return (
    <div className="display">
      {books.map((book) => (
        <div className="box" key={book.id}>
          <img
            src={
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail
            }
            alt={book.volumeInfo.title + " book cover"}
          />
          <h2>{book.volumeInfo.title}</h2>
          <h4>
            {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
          </h4>
          <p>
            {book.volumeInfo.description.length > 1000
              ? book.volumeInfo.description.substring(0, 1000) + "..."
              : book.volumeInfo.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Display;
