import React from "react"
import { Box, Card, CardContent, Typography, Button } from "@mui/material"
import { PlayArrow } from "@mui/icons-material"
import { type Track } from "../types/track"

type Props = {
  song: Track,
  index: number
}
const RenderResultCard: React.FC<Props> = ({ song, index }) => {

  return (
    <Card key={index} sx={{ borderRadius: "16px" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography fontWeight={600}>
            {song.name}
          </Typography>
          <Typography fontSize={14} color="text.secondary">
            {song.artist}
          </Typography>
        </Box>

        <Button
          startIcon={<PlayArrow />}
          variant="outlined"
          href={`https://www.youtube.com/results?search_query=${song.artist} ${song.name}`}
          target="_blank"
        >
         Listen
        </Button>
      </CardContent>
    </Card>
  )
}

export default RenderResultCard