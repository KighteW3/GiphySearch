import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Display from "./components/Display";
import Footer from "./components/Footer";

import "./styles/App.css";
import { useAppDispatch } from "./customHooks/store";
import { toggleSetStorage } from "./store/reducers/toggleSetStorage";
import {
  changeSearch,
  changeLanguage,
  changeLimit,
  changeRating,
} from "./store/reducers/apiAccesor";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleSetStorage(true));
    }, 100);

    (async () => {
      const keyname: any = localStorage.getItem("keyname");
      try {
        if (keyname)
        dispatch(changeSearch(keyname))
      }catch(e) {
        console.log(e)
      }
      const limit: any = localStorage.getItem("limit");
      try {
        if (limit)
        dispatch(changeLimit(parseInt(limit)))
      }catch(e) {
        console.log(e)
      }
      const rating: any = localStorage.getItem("rating");
      try {
        if (rating)
        dispatch(changeRating(rating))
      }catch(e) {
        console.log(e)
      }
      const language: any = localStorage.getItem("language");
      try {
        if (language)
        dispatch(changeLanguage(language))
      }catch(e) {
        console.log(e)
      }
    })()
  }, []);

  return (
    <div className="main">
      <NavBar />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
