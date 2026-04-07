import React from "react"
import { Box } from "@mui/material"
import { useFormStore } from "../../../store/useFormStore"
import ArtistFilterSelect from "../../ArtistFilterSelect"
import SongsCountSelect from "../../../components/SongsCountSelect"
import LanguageSelector from "../../../UI/LanguageSelector"

const StepThree : React.FC = () => {
    const store = useFormStore()
    const songsCount = store.answers.songsCount

    if(!songsCount) {
        store.setAnswer('songsCount', 10)
    }

    if(!store.answers.language) {
        store.setAnswer('language', "any")
    }

    const handleLanguageChange = (value: string) => {      
          store.setAnswer('language', value)
    }

    const handleChange = (value: number) => {
        store.setAnswer('songsCount', value)
    }
    return (
        <Box sx={{ gap: 4, display: 'flex', flexDirection: 'column',mt:3 }   }>
            <SongsCountSelect value={songsCount?? 10} onChange={handleChange} />
            <LanguageSelector value={store.answers.language??"any"} onChange={handleLanguageChange} />
            <ArtistFilterSelect 
            value={store.answers.artistFilter?? "partial"} 
            onChange={(value) => store.setAnswer('artistFilter', value)} 
            />
        </Box>
    )
}

export default StepThree