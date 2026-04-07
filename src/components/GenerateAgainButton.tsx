import React from "react"
import { Button } from "@mui/material"
import { useFormStore } from "../store/useFormStore"
import { useNavigate } from "react-router-dom"


const GenerateAgainButton: React.FC = () => {
    const store = useFormStore()
    const navigate = useNavigate()

    const handleClick = () => {
        store.reset()
        navigate("/")
    }

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={handleClick}
            sx={{ mt: 2 }}
        >
            Generate Again
        </Button>
    )
}

export default GenerateAgainButton