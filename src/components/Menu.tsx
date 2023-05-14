import "../styles/Menu.css";
import { useAppSelector } from "../customHooks/store";
import { useEffect, useState } from "react";
import randomNumber from "../customHooks/randomNumber";

export default function Menu() {
  const isToggled = useAppSelector((state) => state.toggleMenu);
  const [wichClass, setWichClass] = useState("menu");
  const [menuIcon, setMenuIcon] = useState("");
  const [menuIcon2, setMenuIcon2] = useState("");

  const keyname = useAppSelector((state) => state.apiAccesor.keyname)

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=hbrH2e76pcieIfpPjMNg6689hgeeg3Oe&q=${keyname}`
    )
      .then((data) => data.json())
      .then((res) =>
        setMenuIcon(
          res.data[randomNumber(0,30)].images.downsized_medium.url
        )
      );
  }, [keyname]);

  useEffect(() => {
    if (isToggled === 0) {
      setWichClass("menu");
    } else if (isToggled === 1) {
      setWichClass("menu-on");
      setMenuIcon2(menuIcon)
    } else if (isToggled === 2) {
      setWichClass("menu-off");
    }
  }, [isToggled, menuIcon]);

  return (
    <div className={wichClass}>
      <div className="menu__photo">
        <img src={menuIcon2} alt="Gif menu" />
      </div>
      <div className="menu__filters">
        <form>
          <label htmlFor="menu__filters__limits">awdadd</label>
          <select id="menu__filters__limits">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
          </select>
        </form>
      </div>
    </div>
  );
}
