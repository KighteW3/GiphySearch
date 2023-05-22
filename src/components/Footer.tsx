import { useState, useEffect } from "react";
import { useAppSelector } from "../customHooks/store";
import "../styles/Footer.css";

export default function Footer() {
  const [languageG, setLanguageG] = useState([""]);
  const lang = useAppSelector((state) => state.apiAccesor.language);

  useEffect(() => {
    if (lang === "es") {
      setLanguageG(["Página hecha por", "usando"]);
    } else if (lang === "en") {
      setLanguageG(["Website made by", "using"]);
    }
  }, [lang]);

  return (
    <footer className="footer-container">
      <p>
        {languageG[0]}{" "}
        <a href="https://emanuelasandei.vercel.app">Emanuel Asandei</a>{" "}
        {languageG[1]}{" "}
        <a href="https://developers.giphy.com/">Giphy Developers</a>
      </p>
    </footer>
  );
}
