import React from 'react';
import { Team } from 'csgogsi-socket';
import * as I from '../../api/interfaces';
import axios from 'axios';

interface TeamLogoProps {
    team?: Team | I.Team | null;
    height?: number;
    width?: number;
};

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export const TeamLogo = ({team, height = 50, width = 50}: TeamLogoProps) => {
    // console.log('TeamLogo:', team);
    if(!team) return null;
    let id = '';
    const { logo } = team;
    if('_id' in team){
      id = team._id;
    } else if('id' in team && team.id){
      id = team.id;
    }
    return (
      <div className={`logo`}>
          { logo && id ? <img src={`${apiUrl}/teams/${id}/logo`} width={width} height={height} alt={'Team logo'} /> : ''}
      </div>
    );
}