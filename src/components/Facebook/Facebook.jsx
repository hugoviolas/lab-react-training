import React from 'react';
import prof from './../../data/berlin.json';
import './Facebook.css';
import { useState, useEffect } from 'react';

const Facebook = () => {
  const [profiles, setProfile] = useState(prof);
  const [displayInfos, setDisplayInfos] = useState(false);
  const [showCountry, setShowCountry] = useState(false);

  useEffect(() => {
    console.log('Country change: ', showCountry);
  }, [showCountry]);

  const countries = prof.map((profile) => {
    return profile.country;
  });

  const handleDisplayInfos = () => {
    setDisplayInfos(!displayInfos);
  };
  const handleShowCountry = (event) => {
    console.log(event.target.innerHTML);
    const country = event.target.innerHTML;
    //DOM Manipulation to add class with background color
    //If inner HTML === country
  };
  if (!profiles) {
    return <div>Loading profiles...</div>;
  }
  return (
    <div>
      {countries.map((country) => {
        return (
          <button
            onClick={(e) => {
              setShowCountry(e.target.innerHTML);
            }}
          >
            {country}
          </button>
        );
      })}
      {profiles.map((profile) => {
        return (
          <div key={profile.firstName} className="card">
            <div className="card-picture">
              <picture onClick={handleDisplayInfos}>
                <img src={profile.img} alt="" />
              </picture>
            </div>
            {displayInfos && (
              <div className="infos">
                <div>
                  <p>
                    <span>First Name: </span>
                    {profile.firstName}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Last Name: </span>
                    {profile.lastName}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Country: </span>
                    {profile.country}
                  </p>
                </div>
                <div>
                  {profile.isStudent && (
                    <p>
                      <span>Type: </span>
                      Student
                    </p>
                  )}
                  {!profile.isStudent && (
                    <p>
                      <span>Type: </span>
                      Teacher
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
