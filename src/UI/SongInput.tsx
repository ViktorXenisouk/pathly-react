import React, { useState, useMemo } from "react"
import { TextField, Autocomplete } from "@mui/material"
import debounce from "lodash.debounce"
import { searchTracks } from "../api/lastfm"
import { type Track } from "./../types/track"

type Props = {
  onSelect: (track: (Track | string)[]) => void
  value: (Track | string)[]
}

const SongInput: React.FC<Props> = ({ onSelect, value }) => {
  const [options, setOptions] = useState<Track[]>([])

  const fetchTracks = async (value: string) => {
    const results = await searchTracks(value)
    setOptions(results)
  }

  const debouncedFetch = useMemo(
    () => debounce(fetchTracks, 400),
    []
  )

  return (
    <Autocomplete
      multiple
      freeSolo
      value={value}
      options={options}
      
      onChange={(e, newValue) => {
        const normalized = newValue.map((item) => {
          if (typeof item === "string") {
            return item
          }
          return item
        })

        onSelect(normalized)
      }}

      getOptionLabel={(option) => {
        if (typeof option === "string") return option
        return `${option.name} - ${option.artist}`
      }}

      onInputChange={(event, value) => {
        if (value) debouncedFetch(value)
      }}

      renderOption={(props, option) => {
        if (typeof option === "string") {
          return <li {...props}>{option}</li>
        }

        return (
          <li {...props} style={{ display: "flex", gap: "10px" }}>
            <img
              src={typeof option === "string" ? `https://ui-avatars.com/api/?name=${option}` : `https://ui-avatars.com/api/?name=${option.artist}`}
              width={40}
              height={40}
              style={{ borderRadius: "8px" }}
            />
            <div>
              <div>{option.name}</div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>
                {option.artist}
              </div>
            </div>
          </li>
        )
      }}

      renderInput={(params) => (
        <TextField {...params} label="Search songs" />
      )}
    />
  )
}

export default SongInput