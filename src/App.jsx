import "./App.scss";

import Header from "./components/header/Header";
import Article from "./components/article/Article";
import Search from "./components/search/Search";
// import Display from "./components/display/Display";

function App() {
  return (
    <div className="app">
      <Header />
      <Article />
      <Search />
    </div>
  );
}

export default App;
