import React from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driverCard">
      <div className="carPicture">
        <img src={img} alt="" />
      </div>
      <div className="driverInfos">
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <div className="car">
          <p>{car.model}-</p>
          <p>{car.licensePlate}</p>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
