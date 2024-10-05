import React from 'react'
import * as I from 'csgogsi-socket'
import './matchbar.scss'

interface MatchbarProps {
    map: I.Map;
}


export const Matchbar: React.FC<MatchbarProps> = ({map}) => {
    
    const getRoundLabel = () => {
        const round = map.round +1;
        if (round <= 24) {
            return `Round ${round}/24`;
        }
        const additionalRounds = round - 24;
        const Overtime = Math.ceil(additionalRounds / 6);
        return `Overtime ${Overtime} - Round ${additionalRounds % 6}/6`;
    };
    

    
    return (
    <div id='matchbar'>
        <div className='team'>
            <div className='team-name'>Astralis</div>
            <div className='logo'>
                <img src='https://static.hltv.org/images/team/logo/6665' alt='Astralis'/>
            </div>
        </div>
        <div className='score-left'></div>
        <div id='timer'>
            <div id="round_now">{getRoundLabel()}</div>
        </div>
        <div className='team'>
            <div className='team-name'>NIP</div>
            <div className='logo'>
                <img src='https://static.hltv.org/images/team/logo/4411' alt='NIP'/>
            </div>
        </div>
        <div className='score-left'></div>
    </div>
    )
}
