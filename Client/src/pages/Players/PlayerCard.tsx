import EditIcon from '@mui/icons-material/Edit';
import Image from "../../assets/images/player_silhouette.webp"
import { PlayerProps } from './Players';

export const PlayerCard = ({name, realName, steamId, teamLogo, picture}: PlayerProps) => {
    return (
        <div className='flex p-4 rounded bg-background relative size-full'>
            <div className='flex justify-evenly items-center flex-col w-1/2'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className='text-xs text-stone-400'>{realName}</p>
                </div>
                <img src={teamLogo} alt='Team' className='size-16'/>
                <button className={`text-sm flex items-center gap-1 font-medium px-2 py-1 rounded bg-button hover:bg-border`}>
                {steamId}
                </button>
            </div>
            <div className='flex w-1/2'>
                <button className='absolute top-0 right-0'>
                    <EditIcon className='text-stone-500'/>
                </button>
                <img src={picture ? picture : Image} alt='Player' className='absolute bottom-0 right-10 size-40'/>
            </div>
        </div>
    )
}