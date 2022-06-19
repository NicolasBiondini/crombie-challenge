import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Searcher.css";

type Props = {};

const Searcher = (props: Props) => {
  const [character, setCharacter] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (character.length <= 0) return alert("Ingresa un nombre valido.");
    navigate(`/results?filter=${character}`);
  };

  return (
    <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="input-text"
        type={"text"}
        onChange={(e) => {
          setCharacter(e.target.value);
        }}
        placeholder="Buscar personaje"
      />
      <input className="input-button" type={"submit"} value="Search" />
    </form>
  );
};

export default Searcher;
