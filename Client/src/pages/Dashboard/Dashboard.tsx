
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Grid2,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from '@mui/material';


export const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {/* Upcoming Matches */}
        <Grid xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h6">Upcoming Matches</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Match 1: Team A vs Team B" secondary="Tomorrow 3:00 PM" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Match 2: Team C vs Team D" secondary="Oct 10, 5:00 PM" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Server Connection Status */}
        <Grid xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h6">Server Connection Status</Typography>
            <Box mt={2}>
              <Typography variant="body1" color="green">Connected</Typography>
              {/* For disconnected status, use: <Typography color="red">Disconnected</Typography> */}
            </Box>
          </Paper>
        </Grid>

        {/* Connected Players */}
        <Grid xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h6">Connected Players</Typography>
            <List>
              <ListItem>
                <Avatar alt="Player 1" />
                <ListItemText primary="Player 1" />
              </ListItem>
              <ListItem>
                <Avatar alt="Player 2" />
                <ListItemText primary="Player 2" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Current Match Information */}
        <Grid xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h6">Current Match Information</Typography>
            <Typography variant="body1" mt={2}>In-Game Time: 12:34</Typography>
            <Typography variant="body1" mt={1}>Current Round: 5/30</Typography>
          </Paper>
        </Grid>

        {/* Team A Box */}
        <Grid xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h6">Team A</Typography>
            <Typography variant="body1" mt={2}>Score: 8</Typography>
            <Typography variant="body1">Economy: $10,000</Typography>
            <Typography variant="h6" mt={2}>Player Stats</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Player 1" secondary="Kills: 10, Deaths: 2, Assists: 3" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Player 2" secondary="Kills: 8, Deaths: 4, Assists: 2" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Team B Box */}
        <Grid xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <Typography variant="h6">Team B</Typography>
            <Typography variant="body1" mt={2}>Score: 7</Typography>
            <Typography variant="body1">Economy: $9,500</Typography>
            <Typography variant="h6" mt={2}>Player Stats</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Player 3" secondary="Kills: 9, Deaths: 3, Assists: 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Player 4" secondary="Kills: 7, Deaths: 5, Assists: 2" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
