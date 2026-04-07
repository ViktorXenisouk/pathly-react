import React, { useEffect } from "react"
import { RouterProvider, useLocation } from "react-router-dom"
import { router } from "./router/router"
import { Paper, Container, Box, useMediaQuery } from "@mui/material"

function App() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
  }, [location.pathname])

  return (
    <Container maxWidth="md" disableGutters={isSmall} >
      <Paper sx={{ p: 0, m: 0, borderRadius: { xs: 0, md: 2 } }}>
        <Box sx={{ p: 2 }}>
          <RouterProvider router={router} />
        </Box>
      </Paper>
    </Container>
  )
}

export default App
