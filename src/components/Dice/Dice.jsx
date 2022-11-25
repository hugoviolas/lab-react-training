import React from 'react';
import './Dice.css';
import { useState } from 'react';

const Dice = () => {
  const [dice, setDice] = useState(Math.floor(Math.random() * 6) + 1);
  const handleDiceRoll = () => {
    setDice('-empty');
    setTimeout(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
    }, 1000);
  };
  return (
    <div>
      <picture className="dice">
        <img
          onClick={handleDiceRoll}
          src={require(`./../../assets/images/dice${dice}.png`)}
          alt="dice"
        />
      </picture>
    </div>
  );
};

export default Dice;
