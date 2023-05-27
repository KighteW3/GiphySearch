import NavBar from "./components/NavBar";
import Display from "./components/Display";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {

  return (
    <div className="main">
      <div className="main__modal-container">
        <img loading="lazy" />
      </div>
      <NavBar />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
