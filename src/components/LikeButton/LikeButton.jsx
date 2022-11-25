import React from 'react';
import './LikeButton.css';
import { useState } from 'react';

const LikeButton = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [count, setCount] = useState(0);
  const divColor = {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
  };
  return (
    <div>
      <button
        style={divColor}
        className="likeButton"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default LikeButton;
