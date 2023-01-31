import "./Display.scss";

const Display = ({ books }) => {
    if (!books) {
        return <div>No books found.</div>;
    }
    return (
        // Create a component to be rendered in through the map

        <div className="display">
            {books.map((book) => (
                // <BookCard key={book.id} book={book}/>

                <div className="box" key={book.id}>
                    <img
                        src={
                            book.volumeInfo.imageLinks &&
                            book.volumeInfo.imageLinks?.smallThumbnail
                        }
                        alt={book.volumeInfo.title + " book cover"}
                    />
                    <h2>{book.volumeInfo.title}</h2>
                    <h4>
                        {book.volumeInfo.authors &&
                            book.volumeInfo.authors.join(", ")}
                    </h4>
                    <p>
                        {book.volumeInfo.description &&
                        book.volumeInfo.description.length > 1000
                            ? book.volumeInfo.description.substring(0, 1000) +
                              "..."
                            : book.volumeInfo.description}
                    </p>
                </div>
                // Using a placeholder image (static fiule in project to use when book does not have available thumbnail
                // Add logic to handle when No description and give user feedback (ie "no description available")

                // Optional Chaining - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

                // Modal - create another component - https://react-bootstrap.github.io/components/modal/
            ))}
        </div>
    );
};

export default Display;
