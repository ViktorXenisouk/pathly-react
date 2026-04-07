import React from "react"
import { Box, Typography, CircularProgress } from "@mui/material"
import MusicNoteIcon from '@mui/icons-material/MusicNote'

const LoadingPage2: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'secondary',
        textAlign: 'center',
        px: 2
      }}
    >
      <MusicNoteIcon sx={{ fontSize: 80, mb: 2, animation: 'pulse 1.5s infinite' }} />
      <Typography variant="h4" sx={{ mb: 1 }}>
        Loading your playlist...
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
        ....
      </Typography>
      <CircularProgress 
        sx={{ color: 'secondary' }} 
        size={60} 
        thickness={5} 
      />
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
          }
        `}
      </style>
    </Box>
  )
}

export default LoadingPage2