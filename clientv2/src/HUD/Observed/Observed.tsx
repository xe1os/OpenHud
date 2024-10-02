import React from 'react'
import './observed.scss'
import { Player } from 'csgogsi-socket';

export const Observed = (player: Player | null) => {
    const getHealthBarWidth = (health: number, min: number, max: number) => {
		if (health > min && health <= max) {
			return health + "%";
		}
		if (health <= min) {
			return "0%";
		}
		if (health > max) {
			return "100%";
		}
		return "0%";
	}

    if (!player) {
        return <div>Loading...</div>;
    }

    /* 
    Object Keys : steamid, name, observer_slot, team, activity, state, spectarget, position, forward

        state: health, armor, helmet, defusekit, flashed, smoked, burning, money, round_kills, round_killhs, round_totaldmg, equip_value

    */


  return (
    <div>
        {/* <div id='Test' className='absolute top-2 w-20 h-5 bg-slate-700 text-white flex justify-center items-center'>
            {roundKills}
        </div> */}


        <div id='Observed-Player' className='flex h-[90vh] justify-center items-end'>
            <div id='Observed-Container' className='flex w-[38%] h-[12%] bg-MainPanel rounded-2xl overflow-hidden'>
                <div id='Observed-Avatar' className={`flex justify-center items-center w-[20%] text-white`}></div>
                <div id='Observed-Main' className='flex flex-col w-[80%] ml-1'>
                    <div id='Observed-Top' className='flex flex-1 text-white font-semibold text-3xl'>
                        <div id='Observed-Name' className='flex w-[45%]'>Alias</div>
                        <div id='Observed-RoundKills-Container' className='flex flex-1'>5</div>
                    </div>
                    <div id='Observed-Middle' className='flex flex-1'>
                        <div id='Observed-Stats-Container' className='flex w-1/2'></div>
                        <div id='Observed-Nades-Container' className='flex w-1/2'></div>
                    </div>
                    <div id='Observed-Bottom' className='flex flex-1'>
                        <div id='Observed-Health-Container' className='flex w-[75%] justify-start items-center gap-1'>
                            <div id='Observed-Health-Text-Icon' className='flex w-[20%] h-full justify-center items-center gap-1'>
                                <div id='Observed-Health-Icon' className='flex w-[50%] h-full fill-white justify-center'>
                                    <div className='flex w-[60%] h-full justify-center items-center'></div>
                                </div>
                                <div id='Observed-Health-Text' className='flex w-[50%] h-full text-white text-xl font-semibold justify-start items-center'>100</div>
                            </div>

                            <div id='Observed-Health-Bar' className='flex w-[80%] h-full gap-1 justify-start items-center'>
                                <div className="obs-healthblock">
                                    {/* <div className={`obs-hpbar1 ${teamColor}`} style={{ width: getHealthBarWidth(playerData.state.health, 0, 25) }}/> */}
                                </div>
                                <div className="obs-healthblock">
                                    {/* <div className={`obs-hpbar2 ${teamColor}`} style={{ width: getHealthBarWidth(playerData.state.health, 25, 50) }}/> */}
                                </div>
                                <div className="obs-healthblock">
                                    {/* <div className={`obs-hpbar3 ${teamColor}`} style={{ width: getHealthBarWidth(playerData.state.health, 50, 75) }}/> */}
                                </div>
                                <div className="obs-healthblock">
                                    {/* <div className={`obs-hpbar4 ${teamColor}`} style={{ width: getHealthBarWidth(playerData.state.health, 75, 100) }}/> */}
                                </div>
                            </div>
                        </div>
                        <div id='Observed-Ammo-Container' className='w-[25%]'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
