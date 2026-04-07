import React from "react"
import { Box } from "@mui/material"
import ArtistOrSongInput from "../../../UI/ArtistInput"
import SongInput from "../../../UI/SongInput"
import MyFormControl from "../../../UI/MyFormControl"
import { useFormStore } from "../../../store/useFormStore"
import { chunks1 } from "./data/step-two"

const StepTwo: React.FC = () => {
    const store = useFormStore()

    const handleChange = (values: string[], name: string) => {
        store.setAnswer(name, values)
    }

    return (
        <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <ArtistOrSongInput value={store.answers.artists} onSelect={(artists) => store.setAnswer('artists', artists)} />
            <SongInput value={store.answers.tracks || []} onSelect={(tracks) => store.setAnswer('tracks', tracks)} />
            <MyFormControl
                gridSize={{ xs: 4, md: 3, lg: 2 }}
                label='Which genre do you prefer?'
                name='genres'
                values={store.answers.genres || []}
                chunks={chunks1}
                onChange={(values) => handleChange(values, 'genres')}
            />
        </Box>
    )
}

export default StepTwo