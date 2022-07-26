import "./style.css";

export default function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <div>
        <strong>{props.organizador}</strong>
        <img
          src={props.image_url}
          alt="minha imagem da profile do github"
        />
      </div>
    </header>
  );
}
