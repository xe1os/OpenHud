import React from 'react'
import Image from "../../assets/images/player_silhouette.webp"
import EditIcon from '@mui/icons-material/Edit';
import { PlayerCard } from './PlayerCard';
import { PlayersTable } from './PlayersTable';
import { PlayerForm } from './PlayerForm';


export interface PlayerProps {
    id: string;
    alias: string;
    avatar?: string;
    real_name?: string;
    steam_id: string;
    team?: string;
  }

export const Players = () => {
    return (
        <div id='players' className='flex size-full flex-col lg:flex-row'>
            {/* <div className='flex justify-center items-center gap-2 w-full h-1/2 lg:w-1/2 lg:h-full px-4'>
                <div className='size-full flex flex-col justify-center items-center'>
                    <PlayerForm/>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2 w-full h-1/2 lg:w-1/2 lg:h-full px-4'>
                <PlayersTable players={players}/>
            </div> */}
        </div>
    )
}
