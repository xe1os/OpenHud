import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

interface Team {
  id: number;
  name: string;
  shortName: string;
}

interface Player {
  id: number;
  alias: string;
  realName: string;
  steamId: string;
  picture: string;
  teamId: number;
}

interface PlayersPageProps {
  teams?: Team[];
}

export const PlayersPage: React.FC<PlayersPageProps> = ({ teams }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [alias, setAlias] = useState('');
  const [realName, setRealName] = useState('');
  const [steamId, setSteamId] = useState('');
  const [picture, setPicture] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState<number | ''>('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingPlayerId, setEditingPlayerId] = useState<number | null>(null);

  const handleCreateOrUpdatePlayer = () => {
    if (!alias || !steamId ) {
      alert('Alias, Steam ID are required.');
      return;
    }

    if (isEditing && editingPlayerId !== null) {
      setPlayers(
        players.map((player) =>
          player.id === editingPlayerId
            ? { ...player, alias, realName, steamId, picture, teamId: Number(selectedTeamId) }
            : player
        )
      );
    } else {
      const newPlayer: Player = {
        id: Date.now(), // Temporary unique ID
        alias,
        realName,
        steamId,
        picture,
        teamId: Number(selectedTeamId),
      };
      setPlayers([...players, newPlayer]);
    }

    // Reset form
    setAlias('');
    setRealName('');
    setSteamId('');
    setPicture('');
    setSelectedTeamId('');
    setIsEditing(false);
    setEditingPlayerId(null);
  };

  const handleEditPlayer = (player: Player) => {
    setAlias(player.alias);
    setRealName(player.realName);
    setSteamId(player.steamId);
    setPicture(player.picture);
    setSelectedTeamId(player.teamId);
    setIsEditing(true);
    setEditingPlayerId(player.id);
  };

  const handleDeletePlayer = (playerId: number) => {
    setPlayers(players.filter((player) => player.id !== playerId));
  };

  const getTeamName = (teamId: number) => {
    if (!teams) return 'Unknown';
    const team = teams.find((team) => team.id === teamId);
    return team;
  };

  return (
    <Container maxWidth="md">
    <Paper sx={{p: 4}}>
      <Typography variant="h4" gutterBottom>
        Players Management
      </Typography>

      <Grid2 container spacing={3}>
        {/* Player Form */}
        <Grid2>
          <Typography variant="h6">{isEditing ? 'Edit Player' : 'Create a New Player'}</Typography>
          <TextField
            label="Alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Real Name"
            value={realName}
            onChange={(e) => setRealName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Steam ID"
            value={steamId}
            onChange={(e) => setSteamId(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Picture URL"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            fullWidth
            margin="normal"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="select-team-label">Team</InputLabel>
            <Select
              labelId="select-team-label"
              value={selectedTeamId}
              onChange={(e) => setSelectedTeamId(e.target.value as number)}
              label="Team"
            >
              {teams && teams.map((team) => (
                <MenuItem key={team.id} value={team.id}>
                  {team.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateOrUpdatePlayer}
            sx={{ mt: 2 }}
          >
            {isEditing ? 'Update Player' : 'Create Player'}
          </Button>
        </Grid2>

        {/* Players List */}
        <Grid2>
          <Typography variant="h6" gutterBottom>
            Players List
          </Typography>
          {players.length === 0 ? (
            <Typography>No players created yet.</Typography>
          ) : (
            <List>
              {players.map((player) => (
                <ListItem key={player.id}>
                  <ListItemAvatar>
                    <Avatar alt={player.alias} src={player.picture} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={player.alias}
                    secondary={`Real Name: ${player.realName}, Steam ID: ${player.steamId}, Team: ${getTeamName(
                      player.teamId
                    )}`}
                  />
                  <IconButton color='primary' onClick={() => handleEditPlayer(player)} edge="end" aria-label="edit">
                    <Edit />
                  </IconButton>
                  <IconButton color='primary' onClick={() => handleDeletePlayer(player.id)} edge="end" aria-label="delete">
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
