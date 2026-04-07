import React from "react"
import { Box, Typography, } from "@mui/material"
import RenderResultCard from "./RenderResultCard"
import { type Result } from "../types/result"

type Props = {
  result: Result
}

const RenderResult: React.FC<Props> = ({ result }) => {
  const { summary, songs } = result
  if (!summary || !songs) {
    return <Typography>No data</Typography>
  }

  return (
    <Box maxWidth={700} mx="auto" mt={5}>

      <Typography variant="h5" mb={2}>
        Your Music Profile
      </Typography>

      <Typography mb={4} color="text.secondary">
        {summary}
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        {songs.map((song: any, index: number) => (
          <RenderResultCard key={index} song={song} index={index} />
        ))}
      </Box>
    </Box>
  )
}

export default RenderResult