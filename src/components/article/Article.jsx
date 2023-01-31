import "./Article.scss";

const article = () => {
  return (
    <div className="article">
      <p>
        Search for a book using the Input and the Search Button. This will
        search through the Google Books API and render a maximum of
        <span> 40 books</span>, keep this in mind if you're just browsing.
        Otherwise search directly for a Title or Artist.
      </p>
    </div>
  );
};

export default article;
