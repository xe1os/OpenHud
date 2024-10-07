import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid2,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Paper,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

interface Team {
  id: number;
  name: string;
  shortName: string;
  logo: string;
}

export const Teams: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamName, setTeamName] = useState('');
  const [shortName, setShortName] = useState('');
  const [logo, setLogo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingTeamId, setEditingTeamId] = useState<number | null>(null);

  const handleCreateOrUpdateTeam = () => {
    if (!teamName || !logo) {
      alert('Team name and logo are required.');
      return;
    }

    if (isEditing && editingTeamId !== null) {
      setTeams(
        teams.map((team) =>
          team.id === editingTeamId
            ? { ...team, name: teamName, shortName, logo }
            : team
        )
      );
    } else {
      const newTeam: Team = {
        id: Date.now(), // Temporary unique ID
        name: teamName,
        shortName,
        logo,
      };
      setTeams([...teams, newTeam]);
    }

    // Reset form
    setTeamName('');
    setShortName('');
    setLogo('');
    setIsEditing(false);
    setEditingTeamId(null);
  };

  const handleEditTeam = (team: Team) => {
    setTeamName(team.name);
    setShortName(team.shortName);
    setLogo(team.logo);
    setIsEditing(true);
    setEditingTeamId(team.id);
  };

  const handleDeleteTeam = (teamId: number) => {
    setTeams(teams.filter((team) => team.id !== teamId));
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{p: 4}}>
      <Typography variant="h4" gutterBottom>
        Teams Management
      </Typography>

      <Grid2 container spacing={3}>
        {/* Team Form */}
        <Grid2>
          <Typography variant="h6">{isEditing ? 'Edit Team' : 'Create a New Team'}</Typography>
          <TextField
            label="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Short Name"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Logo URL"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateOrUpdateTeam}
            sx={{ mt: 2 }}
          >
            {isEditing ? 'Update Team' : 'Create Team'}
          </Button>
        </Grid2>

        {/* Teams List */}
        <Grid2>
          <Typography variant="h6" gutterBottom>
            Teams List
          </Typography>
          {teams.length === 0 ? (
            <Typography>No teams created yet.</Typography>
          ) : (
            <List>
              {teams.map((team) => (
                <ListItem key={team.id}>
                  <ListItemAvatar>
                    <Avatar alt={team.name} src={team.logo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={team.name}
                    secondary={`Short Name: ${team.shortName}`}
                  />
                  <IconButton onClick={() => handleEditTeam(team)} edge="end" aria-label="edit">
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteTeam(team.id)} edge="end" aria-label="delete">
                    <Delete />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          )}
        </Grid2>
      </Grid2>
      </Paper>
    </Container>
  );
};

