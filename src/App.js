import Details from "./components/details.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-contents">
        <Header />
        <Details />
        <Footer />
      </div>
    </div>
  );
}

export default App;
