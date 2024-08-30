import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState(null);
  const [mapData, setMapData] = useState(null);
  const [roundData, setRoundData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      // console.log('Received data:', receivedData);
      handleData(receivedData);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleData = (data) => {
    if (data.player) {
      setPlayerData(data.player);
    }
    if (data.map) {
      setMapData(data.map);
    }
    if (data.round) {
      setRoundData(data.round);
    }
  };

  return (
    <DataContext.Provider value={{ playerData, mapData, roundData }}>
      {children}
    </DataContext.Provider>
  );
};
