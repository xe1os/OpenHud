import React from 'react'
import Image from "../../assets/images/player_silhouette.webp"
import EditIcon from '@mui/icons-material/Edit';
import { PlayerCard } from './PlayerCard';
import { PlayersTable } from './PlayersTable';
import { PlayerForm } from './PlayerForm';

export interface PlayerProps {
    picture?: string;
    name: string;
    realName: string;
    steamId: string;
    teamLogo: string;
  }


const players = [
    {
        name: 'Player Alias',
        realName: 'Real Name',
        steamId: 'STEAMID:0:101110',
        teamLogo: 'https://img-cdn.hltv.org/teamlogo/T2F4lhjlOmbrxd7VUHaK-_.png?ixlib=java-2.1.0&w=100&s=20665e34cda058abf5a337d9cc4f321d'
    },
    {
        name: 'Player Alias',
        realName: 'Real Name',
        steamId: 'STEAMID:0:101110',
        teamLogo: 'https://img-cdn.hltv.org/teamlogo/T2F4lhjlOmbrxd7VUHaK-_.png?ixlib=java-2.1.0&w=100&s=20665e34cda058abf5a337d9cc4f321d'
    },
    {
        name: 'Player Alias',
        realName: 'Real Name',
        steamId: 'STEAMID:0:101110',
        teamLogo: 'https://img-cdn.hltv.org/teamlogo/T2F4lhjlOmbrxd7VUHaK-_.png?ixlib=java-2.1.0&w=100&s=20665e34cda058abf5a337d9cc4f321d'
    },
    {
        name: 'Player Alias',
        realName: 'Real Name',
        steamId: 'STEAMID:0:101110',
        teamLogo: 'https://img-cdn.hltv.org/teamlogo/T2F4lhjlOmbrxd7VUHaK-_.png?ixlib=java-2.1.0&w=100&s=20665e34cda058abf5a337d9cc4f321d'
    },
]



export const Players = () => {
    return (
        <div id='players' className='flex size-full flex-col lg:flex-row'>
            <div className='flex justify-center items-center gap-2 w-full h-1/2 lg:w-1/2 lg:h-full px-4'>
                <div className='size-full flex flex-col justify-center items-center'>
                    <PlayerForm/>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2 w-full h-1/2 lg:w-1/2 lg:h-full px-4'>
                <PlayersTable players={players}/>
            </div>
        </div>
    )
}
