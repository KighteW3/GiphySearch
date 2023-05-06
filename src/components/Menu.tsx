import "../styles/Menu.css";
import { useAppSelector } from "../customHooks/store";
import { useEffect, useState } from "react";

export default function Menu() {
  const isToggled = useAppSelector((state) => state.toggleMenu);
  const [wichClass, setWichClass] = useState("");

  useEffect(() => {
    if (isToggled === 0) setWichClass("menu-container");
    else if (isToggled === 1) setWichClass("menu-container-on");
    else if (isToggled === 2) setWichClass("menu-container-off");
  }, [isToggled]);

  return <div className={wichClass}></div>;
}
