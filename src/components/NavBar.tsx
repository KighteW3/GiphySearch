import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../customHooks/store";
import "../styles/NavBar.css";
import { turnMenuOn } from "../store/reducers/toggleMenu";
import { changeSearch } from "../store/reducers/apiAccesor";

export default function NavBar() {
  const isToggled = useAppSelector((state) => state.toggleMenu);
  const [screenSize, setScreenSize] = useState(0);
  const keyname = useAppSelector((state) => state.apiAccesor.keyname);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setScreenSize(window.screen.availWidth);

    window.addEventListener("resize", () => {
      setScreenSize(window.screen.availWidth);
    });
  }, []);

  const handleClick = () => {
    console.log(isToggled);
    isToggled === 0 ? dispatch(turnMenuOn(1)) : dispatch(turnMenuOn(2));
    if (isToggled === 0) dispatch(turnMenuOn(1));
    else if (isToggled === 1) dispatch(turnMenuOn(2));
    else if (isToggled === 2) dispatch(turnMenuOn(1));
  };

  function MenuButton() {
    return (
      <div className="nav-bar__menu-button__button" onClick={handleClick}>
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as typeof e.target & {
      searchTo: { value: string };
    };

    const keyvalue = form.searchTo.value;

    dispatch(changeSearch(keyvalue));
  };

  function SearchInput() {
    return (
      <>
        <input
          className="nav-bar__form__input"
          type="search"
          id="nav-bar__form__search-bar"
          name="searchTo"
          placeholder={keyname}
        />
        <button
          className="nav-bar__form__input"
          id="nav-bar__form__submit-button"
          value="submit"
          type="submit"
          name="submit"
        >
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </>
    );
  }

  if (screenSize < 840) {
    return (
      <div className="nav-bar">
        <div className="nav-bar__menu-button">
          <MenuButton />
        </div>
        <form className="nav-bar__form" onSubmit={handleSubmit}>
          <SearchInput />
        </form>
      </div>
    );
  } else {
    return (
      <div className="nav-bar">
        <form className="nav-bar__form" onSubmit={handleSubmit}>
          <SearchInput />
        </form>
      </div>
    );
  }
}
