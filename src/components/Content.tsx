import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../customHooks/store";
import "../styles/Content.css";
import { changeSource, toggleFullView } from "../store/reducers/fullView";

interface GiftResult {
  id: number;
  title: string;
  rating: string;
  import_datetime: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export default function Content() {
  const dispatch = useAppDispatch();
  const [languageG, setLanguageG] = useState<string[]>([""]);

  const keyvalue = useAppSelector((state) => state.apiAccesor.keyname);
  const [apiResult, setApiResult] = useState<GiftResult[]>([]);
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
          const data: { data: GiftResult[] } = await res.json();
          setApiResult(data.data);
        } else {
          const res = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=hbrH2e76pcieIfpPjMNg6689hgeeg3Oe&q=${keyvalue}&limit=${limit}&rating=${rating}&lang=${lang}`
          );
          const data: { data: GiftResult[] } = await res.json();
          setApiResult(data.data);
        }
      } catch (e) {
        console.log(e);
      }
    })();

    lang === "es"
      ? setLanguageG([
          "Buscando por",
          "Título",
          "Clasificación",
          "Fecha",
          "Sin especificar",
        ])
      : setLanguageG([
          "Searching for",
          "Title",
          "Rating",
          "Date",
          "Unspecified",
        ]);
  }, [keyvalue, limit, rating, lang]);

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const target = event.target as HTMLImageElement;
    if (target && target.src) {
      dispatch(toggleFullView("flex"));
      dispatch(changeSource(target.src));
    }
  };

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
          {apiResult.map((result) => {
            return (
              <li key={result.id}>
                <img
                  onClick={handleClick}
                  loading="lazy"
                  src={result.images.downsized_medium.url}
                  alt="Img's from GIPHY"
                />
                <div>
                  <p>
                    <b>{languageG[1]}:</b>{" "}
                    {result.title !== "" ? result.title : languageG[4]}
                  </p>
                  <p>
                    <b>{languageG[2]}:</b>{" "}
                    {result.rating !== ""
                      ? result.rating.toUpperCase()
                      : languageG[4]}
                  </p>
                  <p>
                    <b>{languageG[3]}:</b>{" "}
                    {result.import_datetime !== ""
                      ? result.import_datetime
                      : languageG[4]}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    <>
      <div className="content-box">
        <div className="content-box__filter">
          <ContentFilter />
        </div>
        <div className="content-box__results">
          <ContentResults />
        </div>
      </div>
    </>
  );
}
