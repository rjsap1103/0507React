import React from 'react';

const ProfileCard = ({ name, imagePath, children }) => {
  return (
    <>
      <img src={imagePath} alt={name} />
      <p>{name}</p>
      <h3>{children}</h3>
    </>
  );
};

export default ProfileCard;
