import React, { useEffect, useState } from 'react'
import { Observed } from './Observed/Observed'
import { CSGO, GSISocket } from 'csgogsi-socket';

export const {GSI, socket} = GSISocket('http://localhost:4000', "update");

export const Layout = () => {
const [gameData, setGameData] = useState({});

  useEffect(() => {
    socket.on('update', (data) => {
        console.log(data);
        setGameData(data);
    });

    return () => {
      socket.off('update');
    };
  }, []);
  return (
    <div>
        <Observed steamid={''} name={''} defaultName={''} team={undefined} stats={{
        kills: 0,
        assists: 0,
        deaths: 0,
        mvps: 0,
        score: 0
      }} weapons={{}} state={{
        health: 0,
        armor: 0,
        helmet: false,
        defusekit: undefined,
        flashed: 0,
        smoked: 0,
        burning: 0,
        money: 0,
        round_kills: 0,
        round_killhs: 0,
        round_totaldmg: 0,
        equip_value: 0,
        adr: 0
      }} position={[]} forward={[]} avatar={null} country={null} realName={null} extra={undefined}/>
    </div>
  )
}
