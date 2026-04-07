import React from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import {type ArtistFilter } from "../types/artist"

type Props = {
  value:ArtistFilter
  onChange: (value:ArtistFilter) => void
}

const ArtistFilterSelect: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (event: any) => {
    onChange(event.target.value as ArtistFilter)
  }

  return (
    <FormControl fullWidth sx={{ mt: 2 }}>
      <InputLabel id="artist-filter-label">Artist Filter</InputLabel>
      <Select
        labelId="artist-filter-label"
        value={value}
        label="Artist Filter"
        onChange={handleChange}
      >
        <MenuItem value="only">Only selected artists</MenuItem>
        <MenuItem value="exclude">Exclude selected artists</MenuItem>
        <MenuItem value="partial">Partial / mixed</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ArtistFilterSelect