import React, { useEffect, useState } from 'react';
import { CSGO, GSISocket, CSGORaw } from 'csgogsi-socket';
import { Layout } from './Layout/Layout'
import './hud.scss';

interface HUDProps {
    gameData?: CSGO | null;
}

export const HUD = ({gameData}:HUDProps) => {

  if (!gameData) return <div></div>
  return (
    <div className='hud'>
      <Layout game={gameData} />
    </div>
  )
}
