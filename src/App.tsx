import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Display from "./components/Display";
import Footer from "./components/Footer";
import randomNumber from "./customHooks/randomNumber";

import "./styles/App.css";
import { useAppDispatch, useAppSelector } from "./customHooks/store";
import { toggleSetStorage } from "./store/reducers/toggleSetStorage";

function App() {
  const [keyName, setKeyName] = useState("");
  const menuLoaded = useAppSelector((state) => state.toggleSetStorage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!menuLoaded) dispatch(toggleSetStorage(true));
  }, [dispatch, menuLoaded])

  useEffect(() => {
    async function getApi() {
      const res = await fetch(
        `api.giphy.com/v1/gifs/search?api_key=hbrH2e76pcieIfpPjMNg6689hgeeg3Oe&q=${keyName}`
      );
      const data = await res.json();
      const result = await data.data[randomNumber(0, 30)].images
        .downsized_medium.url;
      setKeyName(result);
    }
    getApi();
  }, [keyName]);

  return (
    <div className="main">
      <NavBar />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
