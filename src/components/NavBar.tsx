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
      <div className="nav-mobile__menu-button__button" onClick={handleClick}>
        <img src="/img/menu.png" alt="" />
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
          className="nav-mobile__form__input"
          type="search"
          id="nav-mobile__form__search-bar"
          name="searchTo"
          placeholder={keyname}
        />
        <button
          className="nav-mobile__form__input"
          id="nav-mobile__form__submit-button"
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
      <div className="nav-mobile">
        <div className="nav-mobile__menu-button">
          <MenuButton />
        </div>
        <form className="nav-mobile__form" onSubmit={handleSubmit}>
          <SearchInput />
        </form>
      </div>
    );
  } else {
    return (
      <div className="nav-mobile">
        <form className="nav-mobile__form" onSubmit={handleSubmit}>
          <SearchInput />
        </form>
      </div>
    );
  }
}
