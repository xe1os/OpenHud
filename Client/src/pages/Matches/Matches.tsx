import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Grid2,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField,
  Tabs,
  Tab,
  Box,
  Paper,
} from '@mui/material';

interface Team {
  id: number;
  name: string;
}

interface Veto {
  type: 'Ban' | 'Pick' | 'Decider';
  team?: string;
  map: string;
}

export const Matches: React.FC = () => {
  const [teams] = useState<Team[]>([
    { id: 1, name: 'Team A' },
    { id: 2, name: 'Team B' },
    { id: 3, name: 'Team C' },
    { id: 4, name: 'Team D' },
  ]);
  
  const [maps] = useState<string[]>(['Ancient', 'Anubis', 'Dust2', 'Mirage', 'Vertigo', 'Inferno', 'Nuke', 'Overpass', 'Train', 'Cache']);
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [bestOf, setBestOf] = useState(1);
  const [vetos, setVetos] = useState<Veto[]>([]);
  const [vetoTabs, setVetoTabs] = useState<number[]>([]);

  useEffect(() => {
    // Adjust the number of vetos based on the bestOf value
    const numberOfVetos = bestOf === 1 ? 1 : bestOf * 2 - 1;
    setVetos(Array(numberOfVetos).fill({ type: 'Ban', map: '' }));
    setVetoTabs(Array(numberOfVetos).fill(0)); // Initially, all vetos default to "Ban" tab
  }, [bestOf]);

  const handleVetoChange = (index: number, type: 'Ban' | 'Pick' | 'Decider', team: string | undefined, map: string) => {
    const newVetos = [...vetos];
    newVetos[index] = { type, team, map };
    setVetos(newVetos);
  };

  const handleTabChange = (index: number, newValue: number) => {
    const newVetoTabs = [...vetoTabs];
    newVetoTabs[index] = newValue;
    setVetoTabs(newVetoTabs);
  };

  const handleSubmit = () => {
    const matchData = {
      team1,
      team2,
      bestOf,
      vetos,
    };
    console.log('Match Data:', matchData);
    // Add your form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create a Match
      </Typography>
      <Grid container spacing={3}>
        {/* Team 1 Selection */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Team 1</InputLabel>
            <Select value={team1} onChange={(e) => setTeam1(e.target.value)}>
              {teams.map((team) => (
                <MenuItem key={team.id} value={team.name}>
                  {team.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Team 2 Selection */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Team 2</InputLabel>
            <Select value={team2} onChange={(e) => setTeam2(e.target.value)}>
              {teams.map((team) => (
                <MenuItem key={team.id} value={team.name}>
                  {team.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Best Of Selection */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Best Of</InputLabel>
            <Select value={bestOf} onChange={(e) => setBestOf(Number(e.target.value))}>
              <MenuItem value={1}>Bo1</MenuItem>
              <MenuItem value={2}>Bo2</MenuItem>
              <MenuItem value={3}>Bo3</MenuItem>
              <MenuItem value={5}>Bo5</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        

        {/* Vetos */}
        {vetos.map((veto, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h6">Veto {index + 1}</Typography>
            <Tabs
              value={vetoTabs[index]}
              onChange={(e, newValue) => handleTabChange(index, newValue)}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Ban" />
              <Tab label="Pick" />
              <Tab label="Decider" />
            </Tabs>

            {/* Tab Panels */}
            <Box sx={{ mt: 2 }}>
              {vetoTabs[index] === 0 && (
                <>
                  <FormControl fullWidth>
                    <InputLabel>Team</InputLabel>
                    <Select
                      value={veto.team || ''}
                      onChange={(e) => handleVetoChange(index, 'Ban', e.target.value, veto.map)}
                    >
                      <MenuItem value={team1}>{team1}</MenuItem>
                      <MenuItem value={team2}>{team2}</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Map</InputLabel>
                    <Select
                      value={veto.map}
                      onChange={(e) => handleVetoChange(index, 'Ban', veto.team, e.target.value)}
                    >
                      {maps.map((map) => (
                        <MenuItem key={map} value={map}>
                          {map}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </>
              )}
              {vetoTabs[index] === 1 && (
                <>
                  <FormControl fullWidth>
                    <InputLabel>Team</InputLabel>
                    <Select
                      value={veto.team || ''}
                      onChange={(e) => handleVetoChange(index, 'Pick', e.target.value, veto.map)}
                    >
                      <MenuItem value={team1}>{team1}</MenuItem>
                      <MenuItem value={team2}>{team2}</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>Map</InputLabel>
                    <Select
                      value={veto.map}
                      onChange={(e) => handleVetoChange(index, 'Pick', veto.team, e.target.value)}
                    >
                      {maps.map((map) => (
                        <MenuItem key={map} value={map}>
                          {map}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </>
              )}
              {vetoTabs[index] === 2 && (
                <FormControl fullWidth>
                  <InputLabel>Map</InputLabel>
                  <Select
                    value={veto.map}
                    onChange={(e) => handleVetoChange(index, 'Decider', undefined, e.target.value)}
                  >
                    {maps.map((map) => (
                      <MenuItem key={map} value={map}>
                        {map}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Box>
          </Grid>
        ))}

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Create Match
          </Button>
        </Grid>
      </Grid>
      </Paper>
    </Container>
  );
};
