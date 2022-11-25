import React from 'react';

const Rating = ({ children }) => {
  // ☆
  // ★
  const str = '★';
  const number = Math.round(children);
  return (
    <div>
      <p>{str.repeat(number).padEnd(5, '☆')}</p>
    </div>
  );
};

export default Rating;
