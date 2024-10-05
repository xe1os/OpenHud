import React from 'react'
import { Skull, playerCT, playerT } from '../../assets/Icons';

interface AvatarProps {
    steamid: string,
    teamId?: string | null,
    slot?: number,
    height?: number,
    width?: number,
    showSkull?: boolean,
    showCam?: boolean,
    sidePlayer?: boolean,
    teamSide?: string,
    flashed?: number | undefined,
  }

export const Avatar = ({steamid, teamId, slot, height, width, showSkull, showCam, sidePlayer, teamSide, flashed}:AvatarProps) => {
    const flashValue = flashed ? (flashed < 100 ? 100 : flashed * 2) : 100;
    const defaultPicure = teamSide === "CT" ? playerCT : playerT;

    return (
        <div className={'avatar'}>
          <img src={defaultPicure} height={height} width={width} alt={"Avatar"} style={{ filter: `brightness(${flashValue}%)` }}/>
        </div>
      );
}