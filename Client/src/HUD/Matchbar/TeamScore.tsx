import React, { useState } from "react";
import * as I from "csgogsi-socket";
import WinIndicator from "./WinIndicator";
import { Timer } from "./Matchbar";
import { TeamLogo } from "./TeamLogo";
import PlantDefuse from "../Timers/PlantDefuse"

interface TeamScoreProps {
  team: I.Team;
  orientation: "left" | "right";
  timer: Timer | null;
//   showWin: boolean;
}

export const TeamScore = ({team, orientation, timer}: TeamScoreProps) => {
  const [ show, setShow ] = useState(false);

  // onGSI("roundEnd", result => {
  //   if(result.winner.orientation !== orientation) return;
  //   setShow(true);

  //   setTimeout(() => {
  //     setShow(false);
  //   }, 5000);
  // }, [orientation]);

    return (
      <>
        <div className={`team ${orientation} ${team.side}`}>
          <div className="team-name">{team.name}</div>
          <TeamLogo team={team} />
          <div className="round-thingy"><div className="inner"></div></div>
        </div>
        <PlantDefuse timer={timer} side={orientation} />
        <WinIndicator team={team} show={show}/>
      </>
    );
  }
