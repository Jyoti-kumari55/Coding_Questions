import "./App.css";

const GetProduct = () => {
  const book = {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    year: 1949,
  };
  return (
    <div>
      <h1>Book Information</h1>
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
    </div>
  );
};

const GetBookDetails = () => {
  const books = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: {
      name: "Douglas Adams",
      nationality: "British",
    },
    publicationYear: 1979,
    genres: ["Science Fiction", "Comedy"],
  };
  return (
    <div>
      <h1>Book Details</h1>
      <h3>{books.title}</h3>
      <p>Author: {books.author.name} ({`Nationality: ${books.author.nationality}`})</p>
      <p>Publication: {books.publicationYear}</p>
      <p>Genres: {books.genres.join(", ")}</p>
    </div>
  );
};
const articleData = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  publishedDate: "March 1, 2024",
};

const GetArticleInfo = ({ articleInfo }) => {
return (
  <div>
    <h1>Article Information</h1>
    <p>Title: {articleInfo.title}</p>
    <p>Author: {articleInfo.author}</p>
    <p>Published Date: {articleInfo.publishedDate}</p>
  </div>
)
}
function App() {
  return (
    <div className="App">
      <GetProduct />
      <hr />
      <GetBookDetails />
      <hr/>
      <GetArticleInfo articleInfo={articleData} />
    </div>
  );
}

export default App;
