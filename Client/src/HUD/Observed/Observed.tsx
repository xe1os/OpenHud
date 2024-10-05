import React from 'react'
import './observed.scss'
import { Player } from 'csgogsi-socket';
import { WeaponImage } from '../Weapons/Weapon';
import { ArmorHelmet, ArmorFull, HealthFull, Bullets, KillIcon, Skull, AssistIcon } from '../../assets/Icons';
import { RoundKills } from '../Helpers/RoundKills';
import { Avatar } from '../Helpers/Avatar';

interface PlayerProps {
    player: Player | null;
}

export const Observed = ({player}: PlayerProps) => {
    if (!player) return null;

    // console.log(player);
    
    const weapons = Object.values(player.weapons).map(weapon => ({ ...weapon, name: weapon.name.replace("weapon_", "") }));
    const currentWeapon = weapons.filter(weapon => weapon.state === "active")[0];
    const grenades = weapons.filter(weapon => weapon.type === "Grenade");
    const { stats } = player;
    const teamColor = player.team.side === "CT" ? "bg-CTColor" : "bg-TColor";
    const roundKills = player.state.round_kills > 0 ? player.state.round_kills : "";

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


    return (
        <>
            <div className="observed-background">
                <div className={`observed ${player.team.side}`}>
                    <div className="obs-avatar-container">
                        {<Avatar steamid={player.steamid} height={140} width={140} slot={player.observer_slot} teamSide={player.team.side}/>}
                    </div>
                    <div className="main_row">
                        <div className="obs-top">
                            <div className="username_container">
                                {/* <TeamLogo team={player.team} height={35} width={35} /> */}
                                <div className="username">{player.name}</div>
                                {/* <div className="real_name">{player.realName}</div> */}
                            </div>
                            <div className="kills-holder">
                                <RoundKills player={player}/>
                            </div>
                            <div className="utility">
                                {/* <Bomb player={player} />
                                <Defuse player={player} /> */}
                            </div>
                            <div className="armor-icon icon">
                                {player.state.helmet ? <ArmorHelmet /> : <ArmorFull />}
                            </div>
                        </div>
                        <div className="obs-middle">
                            <div className="stats_row">
                                <div className="statistics">
                                    <Statistic label={<KillIcon/>} value={stats.kills} />
                                    <Statistic label={<AssistIcon/>} value={stats.assists} />
                                    <Statistic label={<Skull/>} value={stats.deaths} />
                                    <Statistic label={"ADR"} value={player.state.adr} />
                                </div>
                            </div>
                            <div className="grenade_container">
                                {grenades.map(grenade => <React.Fragment key={`${player.steamid}_${grenade.name}_${grenade.ammo_reserve || 1}`}>
                                    <WeaponImage weapon={grenade.name} active={grenade.state === "active"} isGrenade />
                                    {
                                        grenade.ammo_reserve === 2 ? <WeaponImage weapon={grenade.name} active={grenade.state === "active"} isGrenade /> : null}
                                </React.Fragment>)}
                            </div>
                        </div>
                        <div className="obs-bottom">
                            <div className="obs-health">
                                <div className="health_armor_container">
                                    <div className="health-icon icon"><HealthFull /></div>
                                    <div className="health text">{player.state.health}</div>
                                </div>
                                <div className="healthbar-container">
                                    <div className="obs-healthblock">
                                        <div className="obs-hpbar1" style={{ width: getHealthBarWidth(player.state.health, 0, 25) }}/>
                                    </div>
                                    <div className="obs-healthblock">
                                        <div className="obs-hpbar2" style={{ width: getHealthBarWidth(player.state.health, 25, 50) }}/>
                                    </div>
                                    <div className="obs-healthblock">
                                        <div className="obs-hpbar3" style={{ width: getHealthBarWidth(player.state.health, 50, 75) }}/>
                                    </div>
                                    <div className="obs-healthblock">
                                        <div className="obs-hpbar4 " style={{ width: getHealthBarWidth(player.state.health, 75, 100) }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="ammo">
                                <div className="ammo_counter">
                                    <div className="ammo_clip">{(currentWeapon && currentWeapon.ammo_clip) || "-"}</div>
                                    <div className="ammo_reserve">/{(currentWeapon && currentWeapon.ammo_reserve) || "-"}</div>
                                </div>
                                <div className="ammo_icon_container">
                                    <Bullets />
                                </div>
                            </div>
                        </div>
                        {/* <div className="flag">{countryName ? <img src={`${apiUrl}files/img/flags/${countryName.replace(/ /g, "-")}.png`} alt={countryName} /> : ''}</div> */}
                    </div>
                </div>
            </div>
        </>
    );
}


const Statistic = ({label, value}: {label: string | React.ReactNode, value: string | number}) => {
    return (
        <div className="stat">
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </div>
    );
};