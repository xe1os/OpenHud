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
import { VetoCard } from './VetoCard';

interface MatchFormProps {
  match?: Match;
  createMatch?: (match: Match) => void;
  updateMatch?: (match: Match) => void;
  isEditing?: boolean;
  onCancel?: () => void; // Optional prop with default behavior (e.g., handleReset)
}
export const MatchTypes = ['bo1', 'bo2', 'bo3', 'bo5'];
export const maps = [
  "de_mirage",
  "de_cache",
  "de_inferno",
  "de_dust2",
  "de_train",
  "de_overpass",
  "de_nuke",
  "de_vertigo",
  "de_ancient",
  "de_anubis"
]

export const MatchForm = ({ match, createMatch, updateMatch, isEditing, onCancel }: MatchFormProps) => {
  const [matchType, setMatchType] = useState(match?.matchType || 'bo1');
  const [current, setCurrent] = useState(false);
  const [left, setLeft] = useState(match?.left || { id: '', wins: 0 });
  const [right, setRight] = useState(match?.right || { id: '', wins: 0 });
  const [vetos, setVetos] = useState<Veto[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Added for error message
  const [teams, setTeams] = useState<TeamProps[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const teamsData = await getTeams();
      setTeams(teamsData);
    };
    fetchTeams();

    if (isEditing && match) {
      // Update form fields when player prop changes
      setMatchType(match.matchType);
      setCurrent(match.current);
      // setLeft(match.left);
      // setRight(match.right);
    }
  }, [isEditing, match]); // Update form fields when player prop changes

  const handleCancel = () => {
    if (onCancel) {
      onCancel(); // Call onCancel prop function if provided
    }
    handleReset(); // Reset form fields
  };

  const validateForm = () => {
    let isValid = true;
    setErrorMessage(''); // Clear any previous error message

    if (!matchType) {
        setErrorMessage('Match Type is required'); // Set error message
        isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return; // Early return if validation fails

    setIsSubmitting(true);
    const newMatch: Match = {
      id: match?.id || "",
      matchType,
      current,
      left: {
        id: match?.left.id || '',
        wins: match?.left.wins || 0,
      },
      right: {
        id: match?.left.id || '',
        wins: match?.left.wins || 0,
      },
      vetos: [],
    };

    if (isEditing && updateMatch) {
      await updateMatch(newMatch);
    } else if (createMatch) {
      await createMatch(newMatch);
    }

    setIsSubmitting(false);
    handleReset();
  };

  const handleReset = () => {
    setMatchType(match?.matchType || 'bo1');
    setCurrent(false);
    setLeft({ id: '', wins: 0 });
    setRight({ id: '', wins: 0 });
    setIsSubmitting(false);
    setErrorMessage(''); // Clear any previous error message
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        {isEditing ? `Updating: ${match?.left.id} vs ${match?.right.id}` : 'Create Match'}
      </Typography>
      <Box margin={1} sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="leftTeamLabel">Team One</InputLabel>
          <Select
            labelId="leftTeamLabel"
            id="leftTeam"
            value={left.id}
            label="Team One"
            onChange={(e) => setLeft({ id: e.target.value, wins: 0 })}
          >
            {teams.map((team: TeamProps, index) => (
              <MenuItem value={team.id} key={index}>{team.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h4" sx={{p: 1}}>VS</Typography>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="rightTeamLabel">Team Two</InputLabel>
          <Select
            labelId="rightTeamLabel"
            id="rightTeam"
            value={right.id}
            label="Team Two"
            onChange={(e) => setRight({ id: e.target.value, wins: 0 })}
          >
            {teams.map((team: TeamProps, index) => (
              <MenuItem value={team.id} key={index}>{team.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box margin={1}>
      <FormControl>
        <FormLabel id="MatchType">Match Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby="MatchTypeLabel"
            name="MatchType"
          >
            {MatchTypes.map((type, index) => (
                <FormControlLabel value={type} control={<Radio />} label={type} key={index} />
              ))}
          </RadioGroup>
      </FormControl>
      </Box>
      <Box margin={1}>
        <FormControlLabel
          control={<Checkbox checked={current} onChange={(e) => setCurrent(e.target.checked)} />}
          label="Current Match"
        />
      </Box>
      <Typography variant="h6" gutterBottom>Vetos</Typography>
      <Box margin={1} sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        <VetoCard index={1} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
        <VetoCard index={2} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
        <VetoCard index={3} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
        <VetoCard index={4} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
        <VetoCard index={5} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
        <VetoCard index={6} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
        <VetoCard index={7} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
        <VetoCard index={8} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
        <VetoCard index={9} veto={{teamId: 'Astralis', type: 'ban', mapName: 'de_mirage', side: 'CT', mapEnd: false}} />
      </Box>
      <Box margin={1} sx={{ display: 'flex', justifyContent: 'start', gap: 1}}>
        {isSubmitting ? (
          <Button variant="contained" disabled>
            Submitting...
          </Button>
        ) : (
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        )}
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
        {isEditing && ( // Conditionally render Cancel button if onCancel prop is provided
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        )}
      </Box>
      {/* Added error message display */}
      {errorMessage && <Typography variant="body2" color="error" sx={{my: 1}}>{errorMessage}</Typography>}
    </Paper>
  );
};