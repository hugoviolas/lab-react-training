import React from 'react';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };
  return (
    <div>
      <picture>
        <img src={images[index]} alt="amazing photography" />
      </picture>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
