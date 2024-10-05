import React, { useEffect, useState } from 'react';
import { Layout } from './HUD/Layout/Layout';
import { CSGO, GSISocket, CSGORaw } from 'csgogsi-socket';
import { Players } from './pages/Players';
import { Matches } from './pages/Matches';
import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoPage } from './pages/NoPage';


export const {GSI, socket} = GSISocket('http://localhost:4000', "update");

function App() {
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
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/matches" element={<Matches />} />
          {/* <Route path="*" element={<NoPage/>} /> */}
          {gameData && <Route path="/hud" element={<Layout game={gameData} />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
