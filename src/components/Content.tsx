import "../styles/Content.css";

export default function Content() {
  function ContentFilter() {
    return (
      <div className="content-box__filter__searching">
        <h1>Buscando por: Randy Orton</h1>
      </div>
    );
  }

  return (
    <div className="content-box">
      <div className="content-box__filter">
        <ContentFilter />
      </div>
      <div className="content-box__results"></div>
    </div>
  );
}
