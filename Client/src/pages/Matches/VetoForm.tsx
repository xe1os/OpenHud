import { Typography, TextField, Button, Paper, Box, Select, MenuItem, InputLabel, Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Match } from '../../api/interfaces';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { getTeams, TeamProps } from '../Teams';
import { Veto } from '../../api/interfaces';
import { maps, MatchTypes } from './MatchForm';

interface VetoFormProps {
  veto: Veto;
  teams: TeamProps[];
  vetoIndex: number;
  setVetos: (vetos: Veto[]) => void;
}


export const VetoForm = ({ veto, teams, setVetos }: VetoFormProps) => {
  const [teamId, setTeamId] = useState(veto?.teamId || '');
  const [mapName, setMapName] = useState(veto?.mapName || '');
  const [type, setType] = useState(veto?.type || 'ban');
  const [side, setSide] = useState(veto?.side || 'NO');
  const [reverseSide, setReverseSide] = useState(veto?.reverseSide || false);
  const [rounds, setRounds] = useState(veto?.rounds || []);
  const [score, setScore] = useState(veto?.score || {});
  const [winner, setWinner] = useState(veto?.winner || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Added for error message

  const handleSetVeto = () => {
    // Handle veto change
    const newVeto: Veto = {
      teamId,
      mapName,
      type,
      side,
      reverseSide,
      rounds,
      score,
      winner,
      mapEnd: false,
    };
  }
  return (
  <Box sx={{ display: 'flex', justifyContent: 'start', gap: 1, mt: 1, flexDirection: 'column' }}>
      <Typography variant="h6" gutterBottom>Vetos</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'start', gap: 1}}>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="vetoTeamLabel">Team</InputLabel>
        <Select
          labelId="vetoTeamLabel"
          id="vetoTeam"
          value={veto?.teamId || ''} // Assuming first veto belongs to team one
          label="Team"
          onChange={(e) => setTeamId(e.target.value)}
        >
          {teams.map((team: TeamProps, index) => (
            <MenuItem value={team.id} key={index}>{team.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="vetoMapLabel">Map</InputLabel>
        <Select
          labelId="vetoMapLabel"
          id="vetoMap"
          value={veto?.mapName || ''}
          label="Map"
          onChange={(e) => setMapName(e.target.value)}
        >
          {maps.map((map, index) => (
            <MenuItem value={map} key={index}>{map}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={<Radio checked={veto?.type === 'ban'} onChange={(e) => setType('ban')} />}
        label="Ban"
      />
      <FormControlLabel
        control={<Radio checked={veto?.type === 'pick'} onChange={(e) => setType('pick')} />}
        label="Pick"
      />
      <FormControlLabel
        control={<Radio checked={veto?.type === 'decider'} onChange={(e) => setType('decider')} />}
        label="Decider"
      />
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="vetoSideLabel">Side</InputLabel>
        <Select
          labelId="vetoSideLabel"
          id="vetoSide"
          value={veto?.side || 'NO'}
          label="Side"
          onChange={(e) => setSide(e.target.value as 'CT' | 'T' | 'NO')}
        >
          <MenuItem value="CT">CT</MenuItem>
          <MenuItem value="T">T</MenuItem>
          <MenuItem value="NO">No Side</MenuItem>
        </Select>
      </FormControl>
      </Box>
  </Box>  
)};