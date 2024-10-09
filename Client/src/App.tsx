import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { CSGO, GSISocket, CSGORaw } from 'csgogsi-socket';
import { HUD } from './HUD/HUD';
import { AdminPanel } from './pages/AdminPanel';
import { LandingPage } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Matches } from './pages/Matches';
import { PlayersPage } from './pages/Players/PlayersPage';
import { Teams } from './pages/Teams';

export const {GSI, socket} = GSISocket('http://localhost:4000', "update");

export const App = () => {
  const [gameData, setGameData] = useState<CSGO | null>(null);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LandingPage/>}>
        <Route path="admin" element={<AdminPanel />}>
          <Route index element={<Dashboard/>} />
          <Route path="matches" element={<Matches/>} />
          <Route path="players" element={<PlayersPage/>} />
          <Route path="teams" element={<Teams/>} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>,
        <Route path="hud" element={<HUD gameData={gameData}/>} />
      </Route>
    )
  );

  useEffect(() => {
    socket.on('update', (data: CSGORaw) => {
      const digestData = GSI.digest(data);
      setGameData(digestData);
    });

    return () => {
      socket.off('update');
    };
  }, []);

  return (
    <div className={`App size-full`}>
      <RouterProvider router={router}/>
    </div>
  );
}
