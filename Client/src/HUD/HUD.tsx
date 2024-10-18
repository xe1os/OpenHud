import React, { useEffect, useState } from 'react';
import { CSGO } from 'csgogsi-socket';
import { Layout } from './Layout/Layout';
import './hud.scss';
import { Match } from '../api/interfaces';
import { socket } from '../App';
import axios from 'axios';

interface HUDProps {
    gameData?: CSGO | null;
}

export const getMatch = async (id: string): Promise<Match> => {
    const { data } = await axios.get(`http://localhost:4000/matches/${id}`);
    return data;
};

export const HUD = ({ gameData }: HUDProps) => {
    const [currentMatch, setMatchCurrent] = useState<Match | null>(null);

    // Listen for 'match-update' events and fetch match data based on the ID
    useEffect(() => {
        const handleMatchUpdate = async (id: string) => {
            const matchData = await getMatch(id);
            // console.log('Match data:', matchData);
            setMatchCurrent(matchData);
        };

        socket.on('match-update', handleMatchUpdate);

        // Cleanup socket listener on component unmount
        return () => {
            socket.off('match-update', handleMatchUpdate);
        };
    }, []); // Empty dependency array to run once on mount

    if (!gameData) return <div></div>;

    return (
        <div className='hud'>
            <Layout game={gameData} match={currentMatch} />
        </div>
    );
};
