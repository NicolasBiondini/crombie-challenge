import "./Card.css";

import React from "react";

type Props = {
  character: character;
};

const Card = ({ character }: Props) => {
  const { id, name, image, status, species } = character;

  return (
    <div className="card-container">
      <img alt={name} className="image" src={image} />
      <div className="info-container">
        <h2>{name}</h2>
        <div className="detailed-info-container">
          <div className="detailed-info-conatiner-item">
            <p className="info-tittle">ID: </p>
            <p>#{id}</p>
          </div>
          <div className="detailed-info-conatiner-item">
            <p className="info-tittle">Status: </p>
            <p>{status}</p>
          </div>
          <div className="detailed-info-conatiner-item">
            <p className="info-tittle">Specie: </p>
            <p>{species}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
