import React, { useEffect } from 'react'
import * as I from 'csgogsi-socket'
import './matchbar.scss'
import { Match } from '../../api/interfaces';
import { TeamScore } from './TeamScore';

interface MatchbarProps {
    map: I.Map;
    match: Match | null;
    phase: I.PhaseRaw;
}

export interface Timer {
    width: number;
    active: boolean;
    countdown: number;
    side: "left"|"right";
    type: "defusing" | "planting";
    player: I.Player | null;
  }
  
  interface IState {
    defusing: Timer,
    planting: Timer,
    winState: {
      side: "left"|"right",
      show: boolean
    }
  }

function stringToClock(time: string | number, pad = true) {
    if (typeof time === "string") {
      time = parseFloat(time);
    }
    const countdown = Math.abs(Math.ceil(time));
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown - minutes * 60;
    if (pad && seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }


export const Matchbar = ({map, match, phase}: MatchbarProps) => {
    // console.log(match);
    const getRoundLabel = () => {
        const round = map.round +1;
        if (round <= 24) {
            return `Round ${round}/24`;
        }
        const additionalRounds = round - 24;
        const Overtime = Math.ceil(additionalRounds / 6);
        return `Overtime ${Overtime} - Round ${additionalRounds % 6}/6`;
    };

    const time = stringToClock(phase.phase_ends_in);
    const left = map.team_ct.orientation === "left" ? map.team_ct : map.team_t;
    const right = map.team_ct.orientation === "left" ? map.team_t : map.team_ct;
    const bo = (match && Number(match.matchType.substr(-1))) || '0';
    

    
    return (
        <>
        <div id={`matchbar`}>
          <TeamScore team={left} orientation={"left"}/>
          <div className={`score left ${left.side}`}>{left.score}</div>
          <div id="timer" className={bo === 0 ? 'no-bo' : ''}>
            <div id="round_now">{getRoundLabel()}</div>
            <div id={`round_timer_text`}>{time}</div>
            {/* <Bomb /> */}
          </div>
          <div className={`score right ${right.side}`}>{right.score}</div>
          <TeamScore team={right} orientation={"right"}/>
        </div>
      </>
    )
}
