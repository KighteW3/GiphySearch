import "../styles/Menu.css";
import { useAppDispatch, useAppSelector } from "../customHooks/store";
import { FormEvent, useEffect, useState } from "react";
import randomNumber from "../customHooks/randomNumber";
import {
  changeLimit,
  changeRating,
  changeLanguage,
} from "../store/reducers/apiAccesor";

export default function Menu() {
  const [keyToSearch, setKeyToSearch] = useState("");
  const [screenSize, setScreenSize] = useState(0);
  const isToggled = useAppSelector((state) => state.toggleMenu);
  const [wichClass, setWichClass] = useState("menu");
  const [menuIcon, setMenuIcon] = useState("");

  const dispatch = useAppDispatch();

  const keyname = useAppSelector((state) => state.apiAccesor.keyname);
  const limit = useAppSelector((state) => state.apiAccesor.limit);
  const rating = useAppSelector((state) => state.apiAccesor.rating);
  const lang = useAppSelector((state) => state.apiAccesor.language);

  useEffect(() => {
    setScreenSize(window.screen.availWidth);

    window.addEventListener("resize", () => {
      setScreenSize(window.screen.availWidth);
    });
  }, []);

  useEffect(() => {
    const searchStored = localStorage.getItem("keyname");

    try {
      if (searchStored && searchStored !== null) {
        setKeyToSearch(searchStored)
      } else {
        setKeyToSearch(keyname)
      }
    } catch (e) {
      console.log(e);
    }

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=hbrH2e76pcieIfpPjMNg6689hgeeg3Oe&q=${keyToSearch}&limit=${limit}&rating=${rating}&lagn=${lang}`
    )
      .then((data) => data.json())
      .then((res) =>
        setMenuIcon(res.data[randomNumber(0, 9)].images.downsized_medium.url)
      );
  }, [keyname, limit, rating, lang, keyToSearch]);

  useEffect(() => {
    if (screenSize < 840) {
      if (isToggled === 0) {
        setWichClass("menu");
      } else if (isToggled === 1) {
        setWichClass("menu-on");
      } else if (isToggled === 2) {
        setWichClass("menu-off");
      }
    } else {
      setWichClass("menu-on")
    }
  }, [isToggled, menuIcon, screenSize]);

  const handleChanges = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as typeof e.target & {
      filtersLimits: { value: number };
      filtersRating: { value: string };
      filtersLanguage: { value: string };
    };

    const limits = form.filtersLimits.value;
    const rating = form.filtersRating.value;
    const language = form.filtersLanguage.value;

    dispatch(changeLimit(limits));
    dispatch(changeRating(rating));
    dispatch(changeLanguage(language));
  };

  function FilterForm() {
    return (
      <form id="menu__filters__menu" onSubmit={handleChanges}>
        <label htmlFor="menu__filters__limits">Límite de gifs:</label>
        <select
          form="menu__filters__menu"
          name="filtersLimits"
          id="menu__filters__limits"
        >
          <option hidden>{limit}</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="70">70</option>
          <option value="100">100</option>
          <option value="120">120</option>
          <option value="150">150</option>
        </select>
        <label htmlFor="menu__filters__rating">Clasificación por edad:</label>
        <select name="filtersRating" id="menu__filters__rating">
          <option hidden>{rating}</option>
          <option value="g">G</option>
          <option value="pg">PG</option>
          <option value="pg-13">PG-13</option>
          <option value="r">R</option>
        </select>
        <label htmlFor="menu__filters__language">Idioma</label>
        <select name="filtersLanguage" id="menu__filters__language">
          <option hidden>{lang}</option>
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="pt">Portugués</option>
          <option value="ja">Japonés</option>
        </select>
        <input type="submit" value="Aplicar" />
      </form>
    );
  }

  return (
    <div className={wichClass}>
      <div className="menu__photo">
        <img src={menuIcon} alt="Gif menu" />
      </div>
      <div className="menu__filters">
        <FilterForm />
      </div>
    </div>
  );
}
