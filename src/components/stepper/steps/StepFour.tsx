import React, { useState } from "react"
import {
  Box, Typography, TextField, Checkbox, FormControlLabel, Button, Divider,
} from "@mui/material"
import { useFormStore } from "../../../store/useFormStore"
import { useNavigate } from "react-router-dom"
import { handleSubmit as api } from "../../../api/api"

const FinalStep: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const store = useFormStore()
  const navigate = useNavigate()

  const {
    artists,
    tracks,
    songsCount,
    language,
    email,
    consent,
    consentSave
  } = store.answers

  const handleSubmit = async () => {
    if (!consent) return alert("Please accept terms")

    if (consentSave && email) {
      setLoading(true)
      const result = await api(store.answers)

      if (!result.success) {
        alert("An error occurred while submitting your preferences. Please try again.")
      }

      setLoading(false)

      navigate(`/result/${result.result.id}`)
    }
    else {
      navigate("/explore")
    }
  }

  return (
    <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Typography variant="h6">Review your preferences</Typography>

        <Typography mt={1}>
          Artists: {artists?.map((a) => typeof a === "string" ? a : a.name).join(", ") || "—"}
        </Typography>

        <Typography>
          Tracks: {tracks?.map((t) => typeof t === "string" ? t : t.name).join(", ") || "—"}
        </Typography>

        <Typography>
          Languages: {language || "Any"}
        </Typography>

        <Typography>
          Songs count: {songsCount}
        </Typography>
      </Box>

      <Divider />
      <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6">Get results by email (optional)</Typography>

        <TextField
          error={consentSave ? !email : false}
          fullWidth
          label="Your email"
          value={email}
          onChange={(e) => store.setAnswer("email", e.target.value)}
        />
      </Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={consent}
            onChange={(e) => store.setAnswer("consent", e.target.checked)}
          />
        }
        label="I agree to processing my data and generating recommendations"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={consentSave}
            onChange={(e) => store.setAnswer("consentSave", e.target.checked)}
          />
        }
        label="I agree to save my preferences for future use (optional)"
      />
      <Button
        loading={loading}
        variant="contained"
        size="large"
        onClick={handleSubmit}
        disabled={!consent || Boolean(consentSave && !email) || loading}
      >
        {consentSave ? "Generate my playlist and save preferences" : "Explore without saving"}
      </Button>
    </Box>
  )
}

export default FinalStep