import React from "react";
import * as I from "csgogsi-socket";
// import WinIndicator from "./WinIndicator";
// import { Timer } from "./MatchBar";
import { TeamLogo } from "./TeamLogo";
// import PlantDefuse from "../Timers/PlantDefuse"

interface TeamScoreProps {
  team: I.Team;
  orientation: "left" | "right";
//   timer: Timer | null;
//   showWin: boolean;
}

export const TeamScore = ({team, orientation}: TeamScoreProps) => {
    return (
      <>
        <div className={`team ${orientation} ${team.side}`}>
          <div className="team-name">{team.name}</div>
          <TeamLogo team={team} />
          {/* <div className="round-thingy"><div className="inner"></div></div> */}
        </div>
        {/* <PlantDefuse timer={timer} side={orientation} /> */}
        {/* <WinIndicator team={team} show={showWin}/> */}
      </>
    );
  }