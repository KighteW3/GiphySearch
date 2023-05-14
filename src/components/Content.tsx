import { useEffect, useState } from "react";
import { useAppSelector } from "../customHooks/store";
import "../styles/Content.css";

export default function Content() {
  const keyvalue = useAppSelector((state) => state.apiAccesor.keyname);
  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=hbrH2e76pcieIfpPjMNg6689hgeeg3Oe&q=${keyvalue}`
      );
      const data = await res.json();
      setApiResult(data.data);
    })();
  }, [keyvalue]);

  function ContentFilter() {
    return (
      <div className="content-box__filter__searching">
        <h1>
          <b>Buscando por:</b> {keyvalue}
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
                <img src={result.images.downsized_medium.url} alt="" />
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
