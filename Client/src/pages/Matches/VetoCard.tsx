import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Team, Veto } from '../../api/interfaces';
import { Edit } from '@mui/icons-material';

interface VetoCardProps {
    index: number;
    veto: Veto;
}

export const VetoCard = ({index, veto}:VetoCardProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, borderBottom: '1px solid'}}>
        <Box sx={{ display: 'flex', gap: 1}}>
            <Typography variant="h6" color='textSecondary' gutterBottom>Veto {index}</Typography>
            <Typography variant="h5" gutterBottom>{veto.teamId} {veto.type} {veto.mapName}</Typography>
        </Box>
        <IconButton color='primary'>
            <Edit />
        </IconButton>
    </Box>
  )
}
