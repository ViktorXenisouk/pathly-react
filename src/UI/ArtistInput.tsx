import { useState, useMemo } from "react"
import { TextField, Autocomplete } from "@mui/material"
import debounce from "lodash.debounce"
import { searchArtists } from "../api/lastfm"
import { type Artist } from "../types/artist"

type Props = {
  onSelect: (artist: (Artist | string)[]) => void
  value?: (Artist | string)[]
}

export default function ArtistAutocomplete({ onSelect, value }: Props) {
  const [options, setOptions] = useState<Artist[]>([])

  const fetchArtists = async (value: string) => {
    const results = await searchArtists(value) as Artist[]
    setOptions(results)
  }

  const debouncedFetch = useMemo(
    () => debounce(fetchArtists, 400),
    []
  )

  return (
    <Autocomplete
      freeSolo
      multiple
      value={value}
      options={options}
      onChange={(e,value) => onSelect(value)}
      getOptionLabel={(option) => typeof option === "string" ? option : option.name}
      onInputChange={(event, value) => {
        debouncedFetch(value)
      }}
      renderOption={(props, option) => (
        <li {...props} style={{ display: "flex", gap: "10px" }}>
          <img
            src={typeof option === "string" ? `https://ui-avatars.com/api/?name=${option}` : option.image}
            alt=""
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          {typeof option === "string" ? option : option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Search artist" />
      )}
    />
  )
}