import React from 'react';
import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  const divColor = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };
  return (
    <div className="container" style={divColor}>
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
};

export default BoxColor;
