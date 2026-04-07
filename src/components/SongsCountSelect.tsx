import React from "react"
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material"

type Props = {
    value: number
    onChange: (value: number) => void
}

const SongsCountSelect: React.FC<Props> = ({ value, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel>How many songs should we recommend?</InputLabel>
            <Select
                value={value}
                label="How many songs should we recommend?"
                onChange={(e) => onChange(Number(e.target.value))}
                sx={{
                    borderRadius: "12px",
                }}
            >
                <MenuItem value={5}>5 songs</MenuItem>
                <MenuItem value={10}>10 songs</MenuItem>
                <MenuItem value={20}>20 songs</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SongsCountSelect