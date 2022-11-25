import React from 'react';
import './ClickablePicture.css';
import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [showPicture, setShowPicture] = useState(true);
  return (
    <div>
      <picture
        onClick={() => {
          setShowPicture(!showPicture);
        }}
      >
        {showPicture ? (
          <img src={img} alt="no sunglasses man" />
        ) : (
          <img src={imgClicked} alt="sunglasses man" />
        )}
      </picture>
    </div>
  );
};

export default ClickablePicture;
