import { useEffect, useState } from "react";
import { useAppSelector } from "../customHooks/store";
import "../styles/Content.css";

export default function Content() {
  const [languageG, setLanguageG] = useState([""]);

  const keyvalue = useAppSelector((state) => state.apiAccesor.keyname);
  const [apiResult, setApiResult] = useState([]);
  const limit = useAppSelector((state) => state.apiAccesor.limit);
  const rating = useAppSelector((state) => state.apiAccesor.rating);
  const lang = useAppSelector((state) => state.apiAccesor.language);

  useEffect(() => {
    (async () => {
      const searchStored = localStorage.getItem("keyname");

      try {
        if (searchStored && searchStored !== null) {
          const res = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=hbrH2e76pcieIfpPjMNg6689hgeeg3Oe&q=${searchStored}&limit=${limit}&rating=${rating}&lang=${lang}`
          );
          const data = await res.json();
          setApiResult(data.data);
        } else {
          const res = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=hbrH2e76pcieIfpPjMNg6689hgeeg3Oe&q=${keyvalue}&limit=${limit}&rating=${rating}&lang=${lang}`
          );
          const data = await res.json();
          setApiResult(data.data);
        }
      } catch (e) {
        console.log(e);
      }
    })();

    lang === "es"
      ? setLanguageG(["Buscando por"])
      : setLanguageG(["Searching for"]);
  }, [keyvalue, limit, rating, lang]);

  function ContentFilter() {
    return (
      <div className="content-box__filter__searching">
        <h1>
          <b>{languageG[0]}:</b> {keyvalue}
        </h1>
      </div>
    );
  }

  function ContentResults() {
    return (
      <>
        <ul className="content-box__results__list">
          {apiResult.map((result: any) => {
            return (
              <li key={result.id}>
                <img
                  loading="lazy"
                  src={result.images.downsized_medium.url}
                  alt="Img's from GIPHY"
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    <div className="content-box">
      <div className="content-box__filter">
        <ContentFilter />
      </div>
      <div className="content-box__results">
        <ContentResults />
      </div>
    </div>
  );
}
