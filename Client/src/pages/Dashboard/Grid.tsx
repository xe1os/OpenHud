import React from 'react'
import { StatCards } from './StatCards'
import { Routes, Route, Outlet } from 'react-router-dom'
import { Players } from '../Players'
import { Home } from '../Home'
import { Matches } from '../Matches'
import { HUD } from '../../HUD/HUD'
import { Dashboard } from './Dashboard'
import { Teams } from '../Teams'

interface GridProps {
    gameData?: any;
}

export const Grid = ({gameData}: GridProps) => {
  return (
    <div className='px-4 relative size-full'>
        <Routes>
          <Route path="/players" element={<Players />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/hud" element={<HUD />} />
          <Route path="/teams" element={<Teams/>}/>
        </Routes>
    </div>
  )
}
