import { useState, useEffect } from "react";
import Card from "./../../components/Card";
import Titleh1 from "../../components/Tilteh1";
import "./style.css";

export default function Home() {
  const [atleticName, setAtleticName] = useState();
  const [atletics, setAtletics] = useState([]);

  function handleAddStudent() {
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

  return (
    <div className="container">
      <h1>{atleticName}</h1>
      <Titleh1 titulo="Lista da Pelada" />
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setAtleticName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {atletics.map((atletic) => (
        <Card 
        key={atletic.time}
        name={atletic.name} 
        time={atletic.time} />
      ))}
    </div>
  );
}
