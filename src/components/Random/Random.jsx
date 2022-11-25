import React from 'react';

const Random = ({ min, max }) => {
  return (
    <div>
      <p>{Math.floor(Math.random() * max + min)}</p>
    </div>
  );
};

export default Random;
