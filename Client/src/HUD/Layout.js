import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { AllPlayers } from './AllPlayers';
import { Player } from './Player';

const socket = io('http://localhost:4000');

export const Layout = () => {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    socket.on('update', (data) => {
      setGameData(data);
      console.log(gameData);
    });

    return () => {
      socket.off('update');
    };
  }, []);

  return (
    <div>
      {gameData && (
        <><Player playerData={gameData.player} /><AllPlayers allPlayersData={gameData.allplayers} /></>
      )}
    </div>
  );
};
