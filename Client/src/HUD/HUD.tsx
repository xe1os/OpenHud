import React, { useEffect, useState } from 'react';
import { CSGO, GSISocket, CSGORaw } from 'csgogsi-socket';
import { Layout } from './Layout/Layout'
import './hud.scss';

export const {GSI, socket} = GSISocket('http://localhost:4000', "update");

export const HUD = () => {

    const [gameData, setGameData] = useState<CSGO| null>(null);
  useEffect(() => {
    socket.on('update', (data: CSGORaw) => {
        const digestData = GSI.digest(data);
        setGameData(digestData);
    });

    return () => {
      socket.off('update');
    };
  }, []);
  // console.log(gameData);
  if (!gameData) return <div></div>
  return (
    <div className='hud'>
      <Layout game={gameData} />
    </div>
  )
}
