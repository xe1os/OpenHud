import React from 'react'
import Image from "../../assets/images/player_silhouette.webp"
import { Avatar, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper } from '@mui/material';
import { PlayerProps } from './Players';


  interface PlayersTableProps {
    players: PlayerProps[];
  }
  
export const PlayersTable = ({players}:PlayersTableProps) => {
    return (
          <TableContainer component={Paper} sx={{bgcolor: ''}}>
            <Table sx={{ minWidth: 650 }} aria-label="Players Table">
              <TableHead>
                <TableRow>
                  <TableCell align='right'>Picture</TableCell>
                  <TableCell align="right">Alias</TableCell>
                  <TableCell align="right">Real Name</TableCell>
                  <TableCell align="right">Team</TableCell>
                  <TableCell align="right">Steam ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {players.map((player, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                    <Avatar src={player.picture ? player.picture : Image} alt='Player' className='size-12'/>
                    </TableCell>
                    <TableCell align="right">{player.name}</TableCell>
                    <TableCell align="right">{player.realName}</TableCell>
                    <TableCell align="right">{player.teamLogo && <Avatar src={player.teamLogo} alt='Team Logo' className='size-8'/>}</TableCell>
                    <TableCell align="right">{player.steamId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      );
}


/* <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Picture</th>
                <th className="py-2 px-4 border-b">Player Alias</th>
                <th className="py-2 px-4 border-b">Real Name</th>
                <th className="py-2 px-4 border-b">Team</th>
                <th className="py-2 px-4 border-b">Steam ID</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">
                        <Avatar src={player.picture ? player.picture : Image} alt='Player' className='size-12'/>
                    </td>
                    <td className="py-2 px-4 border-b">{player.name}</td>
                    <td className="py-2 px-4 border-b">{player.realName}</td>
                    <td className="py-2 px-4 border-b">
                        {player.teamLogo && <Avatar src={player.teamLogo} alt='Team Logo' className='size-8'/>}
                    </td>
                  <td className="py-2 px-4 border-b">{player.steamId}</td>
                </tr>
              ))}
            </tbody>
          </table> */