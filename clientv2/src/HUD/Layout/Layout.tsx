import React from 'react'
import { CSGO, Team } from 'csgogsi-socket';
import { Observed } from '../Observed/Observed'
import { Matchbar } from '../Matchbar/Matchbar';
import { TeamBox } from '../AllPlayers/TeamBox';

interface LayoutProps {
  game: CSGO;
}

/**
 * TODO: Fix raw data from CS2 GSI, specifically observer slots (start from 1 instead of 0, replace 10 with 0)
 * TODO: Fix TeamBox left/right orientation
 */

export const Layout = ({game}: LayoutProps) => {
  // console.log(game)
  const left = game.map.team_ct.orientation === "left" ? game.map.team_ct : game.map.team_t;
  const right = game.map.team_ct.orientation === "left" ? game.map.team_t : game.map.team_ct;

  const leftPlayers = game.players.filter(player => player.team.side === left.side);
  const rightPlayers = game.players.filter(player => player.team.side === right.side);

  return (
    <div className='layout'>
      <Matchbar map={game.map}/>
      <TeamBox team={right} players={rightPlayers} side='right' current={game.player}/>
      <TeamBox team={left} players={leftPlayers} side='left' current={game.player}/>
      <Observed player={game.player}/>
    </div>
    
  )
}
