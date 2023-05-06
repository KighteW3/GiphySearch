import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../customHooks/store";
import "../styles/NavBar.css";
import { turnMenuOn } from "../store/reducers/toggleMenu";

export default function NavBar() {
  const isToggled = useAppSelector((state) => state.toggleMenu);
  const [screenSize, setScreenSize] = useState(0);
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

  if (screenSize < 720) {
    return (
      <div className="nav-mobile">
        <div className="nav-mobile__menu-button">
          <MenuButton />
        </div>
        <form className="nav-mobile__form">
          <input
            className="nav-mobile__form__input"
            type="search"
            id="nav-mobile__form__search-bar"
          />
          <button
            className="nav-mobile__form__input"
            id="nav-mobile__form__submit-button"
          >
            <img src="/img/search.png" alt="" />
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <>
        <div></div>
      </>
    );
  }
}
