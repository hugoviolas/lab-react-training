import React from 'react';
import { useState } from 'react';
import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
  for (let i = 1; i < limit; i++) {
    return <div className="square">{i}</div>;
  }
};

export default NumbersTable;
