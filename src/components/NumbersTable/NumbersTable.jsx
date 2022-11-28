import React from 'react';
import { useEffect } from 'react';
import './NumbersTable.css';

//  Try with useEffet and DOM Manipulation
const NumbersTable = ({ limit }) => {
  useEffect(() => {
    const table = document.querySelector('.cont');
    for (let i = 1; i < limit + 1; i++) {
      console.log(limit);
      const newDiv = document.createElement('div');
      newDiv.classList.add('square');
      if (i % 2 === 0) {
        newDiv.classList.add('even');
      }
      newDiv.innerHTML = i;
      table.appendChild(newDiv);
    }
  }, []);

  return (
    <div className="cont">
      <h2>It renders twice due to strict mode in index.js </h2>
    </div>
  );
};

export default NumbersTable;
