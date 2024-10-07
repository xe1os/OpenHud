import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { CSGO, GSISocket, CSGORaw } from 'csgogsi-socket';
import { HUD } from './HUD/HUD';
import { Home } from './pages/Home';


export const {GSI, socket} = GSISocket('http://localhost:4000', "update");

function App() {
  const location = useLocation();

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

  return (
    <div id='App' className={`App ${location.pathname === '/hud' ? "" : "dark bg-background2 text-textcolor"}`}>
        {location.pathname !== '/hud' && <Home />}
        <Routes>
          <Route path="/hud" element={<HUD gameData={gameData}/>} />
        </Routes>
    </div>
  );
}

export default App;
