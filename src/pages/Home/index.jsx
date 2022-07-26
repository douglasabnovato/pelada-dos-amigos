import { useState, useEffect } from "react";
import Card from "./../../components/Card";
import Header from "../../components/Header";
import "./style.css";

export default function Home() {
  const [atleticName, setAtleticName] = useState();
  const [atletics, setAtletics] = useState([]);
  const [user, setUser] = useState({
    name: "",
    avatar: "",
  });
  const [api_github, setApi_github] = useState(
    "https://api.github.com/users/douglasabnovato"
  );

  function handleAddAtletic() {
    const newAtletic = {
      name: atleticName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setAtletics((prevState) => [...prevState, newAtletic]);
  }

  useEffect(() => {
    fetch(api_github)
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <div className="container">
      <Header
        titulo="Lista da Pelada"
        organizador={user.name}
        image_url={user.avatar}
      />
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setAtleticName(e.target.value)}
      />
      <button type="button" onClick={handleAddAtletic}>
        Adicionar
      </button>
      {atletics.map((atletic) => (
        <Card key={atletic.time} name={atletic.name} time={atletic.time} />
      ))}
    </div>
  );
}
