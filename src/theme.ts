import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#1DB954", // Spotify green
    },

    secondary: {
      main: "#191414", // почти чёрный
    },

    background: {
      default: "#121212", // основной фон
      paper: "#181818",   // карточки
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    
    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "0.95rem",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "999px",
          fontWeight: 600,
          padding: "8px 18px",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",  // чуть увеличиваем при наведении
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          },
        },
        containedPrimary: {
          backgroundColor: "#1DB954",
          "&:hover": {
            backgroundColor: "#1ed760",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#181818",
          borderRadius: "16px",
          transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
            backgroundColor: "#222",
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#2a2a2a",
          color: "#fff",
          borderRadius: "8px",
          transition: "all 0.2s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            backgroundColor: "#333",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#2a2a2a",
            borderRadius: "10px",
            transition: "all 0.2s ease",
            "&:hover fieldset": {
              borderColor: "#1DB954",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1DB954",
              boxShadow: "0 0 0 2px rgba(29,215,96,0.3)",
            },
          },
        },
      },
    },
  },
})

export default theme