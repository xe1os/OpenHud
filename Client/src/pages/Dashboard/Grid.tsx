import { Routes, Route } from 'react-router-dom'
import { Players } from '../Players'
import { Matches } from '../Matches'
import { HUD } from '../../HUD/HUD'
import { Teams } from '../Teams'
import { Dashboard } from './Dashboard'
import { PlayersPage } from '../Players/PlayersPage'

interface GridProps {
    gameData?: any;
}

export const Grid = ({gameData}: GridProps) => {
  return (
    <div id='Page' className='px-4 flex justify-center size-full items-center'>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/hud" element={<HUD />} />
        </Routes>
    </div>
  )
}
