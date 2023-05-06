import "../styles/Display.css";
import Menu from "./Menu";
import Content from "./Content";

export default function Display() {
  

  return (
    <div className="display-container">
      <Menu />
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
