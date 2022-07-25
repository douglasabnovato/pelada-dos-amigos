import "./style.css";

export default function Titleh1(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <div>
        <strong>Douglas</strong>
        <img
          src="http://github.com/douglasabnovato.png"
          alt="minha image da profile do github"
        />
      </div>
    </header>
  );
}
