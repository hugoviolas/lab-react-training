import React from 'react';
import './IdCard.css';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
      <div className="infos">
        <p>
          <span>First Name:</span> {firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {lastName}
        </p>
        <p>
          <span>Gender: </span>
          {gender}
        </p>
        <p>
          <span>Height: </span>
          {height}
        </p>
        <p>
          <span>Birth: </span>
          {new Intl.DateTimeFormat('fr-FR').format(birth)}
        </p>
      </div>
      <div className="picture">
        <img src={picture} alt="picture of a weird guy" />
      </div>
    </div>
  );
};

export default IdCard;
