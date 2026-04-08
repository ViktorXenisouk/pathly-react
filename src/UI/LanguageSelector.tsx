import React from "react"
import { Box, Chip, Typography } from "@mui/material"

type Props = {
  value: string
  onChange: (value: string) => void
}

const LANGUAGES = [
  { label: "English", value: "en", flag: "🇬🇧" },
  { label: "Czech", value: "cz", flag: "🇨🇿" },
  { label: "Slovak", value: "sk", flag: "🇸🇰" },
  { label: "German", value: "de", flag: "🇩🇪" },
  { label: "French", value: "fr", flag: "🇫🇷" },
  { label: "Any", value: "any", flag: "🌍" },
]

const LanguageSelector: React.FC<Props> = ({ value, onChange }) => {

  return (
    <Box>
      <Typography mb={1}>
        What language should the songs be in?
      </Typography>

      <Box display="flex" gap={1} flexWrap="wrap">
        {LANGUAGES.map((lang) => {
          const selected = value === lang.value
          return (
            <Chip
              key={lang.value}
              label={`${lang.flag} ${lang.label}`}
              onClick={() => onChange(lang.value)}
              color={selected ? "success" : "primary"}
              variant={selected ? "outlined" : "filled"}
              sx={{
                borderRadius: "16px",
                fontWeight: 500,
              }}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default LanguageSelector