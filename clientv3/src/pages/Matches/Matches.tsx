import React, { useState } from 'react';
import LogoPlaceHolder from '../../assets/Team_Logo.png';

export const Matches = () => {
  return (
    <div>
      <h1>Matches</h1>
      <div>
        <img src={LogoPlaceHolder} alt="Team Logo" />
        <p>Team Name</p>
        <p>Team Score</p>
        <p>Opponent Score</p>
        <p>Opponent Name</p>
        <p>Match Date</p>
        <p>Match Time</p>
      </div>
    </div>
  )
};
