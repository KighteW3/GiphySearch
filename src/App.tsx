import NavBar from "./components/NavBar";
import Display from "./components/Display";
import Footer from "./components/Footer";

import "./styles/App.css";
import { useAppDispatch, useAppSelector } from "./customHooks/store";
import { toggleFullView } from "./store/reducers/fullView";

function App() {
  const dispatch = useAppDispatch();
  const showFullView = useAppSelector((state) => state.fullView.showFullView);
  const fullViewSrc = useAppSelector((state) => state.fullView.src);

  const handleClick = () => {
    dispatch(toggleFullView("none"));
  };

  function ModalFullView() {
    return (
      <div
        className="main__modal-container"
        style={{ display: showFullView }}
        onClick={handleClick}
      >
        <div>
          <img loading="lazy" src={fullViewSrc} />
          <a href={fullViewSrc} download="Imagen" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <ModalFullView />
      <NavBar />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
