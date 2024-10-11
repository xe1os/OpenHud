import React, { useEffect, useState } from 'react';
import {  Container, Typography, Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MatchForm } from './MatchForm';
import { Match } from '../../api/interfaces';
import axios from 'axios';
import { MatchCard } from './MatchCard';

export const getMatches = async () => {
  const matches = await axios.get('http://localhost:4000/matches');
  if (axios.isAxiosError(matches)) {
    console.log('Error fetching matches data')
    return []
  }
  if (!matches) {
    return []
  }
  return matches.data;
}

export const MatchesPage = () => {
  const [matches, setMatches] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null); // Store selected player for editing

  useEffect(() => {
    // Fetch players data when the component mounts
    getMatches().then((data) => {
      setMatches(data);
    });
  }, []);

  const handleCreateMatch = async (match: Match) => {
    // Handle create or update match
    setIsLoading(true);
    await axios.post('http://localhost:4000/matches', match)
    await getMatches().then((data) => {
      setMatches(data);
    });
    setIsLoading(false);
  };

  const handleEditMatch = (match: Match) => {
    // Handle edit match
    setIsEditing(true);
    setSelectedMatch(match); // Set selected match for editing
  };

  const handleUpdateMatch = async (match: Match) => {
    // Handle update match
    setIsLoading(true);
    await axios.put(`http://localhost:4000/matches/${match.id}`, match)
    await getMatches().then((data) => {
      setMatches(data);
    });
    setIsLoading(false);
  };

  const handleDeleteMatch = async (id: string) => {
    // Handle delete match
    setIsLoading(true);
    await axios.delete(`http://localhost:4000/matches/${id}`)
    setMatches(matches.filter((match: Match) => match.id !== id));
    setIsLoading(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: "column", lg: "row" }, width: '100%', height: '100%', gap: 4 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
              Match Form
        </Typography>
        {isEditing && selectedMatch ? ( // Conditionally render TeamsForm for editing
          <MatchForm match={selectedMatch} updateMatch={handleUpdateMatch} isEditing={isEditing} onCancel={() => setIsEditing(false)}/>
        )
        : 
        (
        <MatchForm createMatch={handleCreateMatch} />
        )}
      </Container>
      <Container sx={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden', width: '100%', height: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Match List
        </Typography>
        <Grid container spacing={2} columns={2}>
          {matches.length === 0 && <Typography variant="h6">No matches created</Typography>}
          {matches.map((match: Match, index) => (
            <Grid key={index} size={1}>
              <MatchCard match={match} deleteMatch={handleDeleteMatch} onEdit={handleEditMatch} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

