import React from "react"
import { Box, Typography, CircularProgress } from "@mui/material"
import MusicNoteIcon from '@mui/icons-material/MusicNote'

const LoadingPage: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'secondary', // зеленый акцент
        textAlign: 'center',
        px: 2
      }}
    >
      <MusicNoteIcon sx={{ fontSize: 80, mb: 2, animation: 'pulse 1.5s infinite' }} />
      <Typography variant="h4" sx={{ mb: 1 }}>
        Generating your playlist...
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
        Hang tight! We’re mixing tracks based on your vibe.
      </Typography>
      <CircularProgress 
        sx={{ color: '#1DB954' }} 
        size={60} 
        thickness={5} 
      />

      {/* CSS animation */}
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

export default LoadingPage