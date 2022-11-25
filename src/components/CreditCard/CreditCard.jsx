import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const cardNumber = number.split('');
  for (let i = 0; i < cardNumber.length - 4; i++) {
    cardNumber[i] = '•';
  }

  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };
  return (
    <div className="creditCard" style={divStyle}>
      <div className="cardType">
        <h2>{type}</h2>
      </div>
      <div className="cardNumber">
        <p>{cardNumber.join('').replace(/.{4}/g, '$& ')}</p>
      </div>
      <div className="expirationInfo">
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>
      <div className="owner">
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
