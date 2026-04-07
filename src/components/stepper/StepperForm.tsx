import React, { useState, useEffect } from "react"
import { Box, Button, Paper } from "@mui/material"
import MyStapper from "./Stepper"
import StepOne from "./steps/StepOne"
import StepTwo from "./steps/StepTwo"
import StepThree from "./steps/StepThree"
import StepFour from "./steps/StepFour"
import { ArrowRight,ArrowLeft } from "@mui/icons-material"

const steps = ["Vibe", "Taste", "Personalization", "Final"]

const pages = [StepOne, StepTwo, StepThree, StepFour]

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState(new Set<number>())

  useEffect(() => {
    setCompleted((prev) => new Set(prev.add(activeStep)))
  }, [activeStep])

  const handleNext = () => {
    setActiveStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setActiveStep((prev) => prev - 1)
  }

  const page = activeStep < pages.length ? React.createElement(pages[activeStep]) : null

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <MyStapper activeStep={activeStep} completed={completed} setActiveStep={setActiveStep} />

      <Box mt={4}>
        {page}
      </Box>

      <Paper elevation={3} sx={{
        mt: 6,
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        borderTop: "secondary",
        position: "sticky",
        bottom: 2,
        zIndex: 10,
      }}>
        <Button variant="outlined" startIcon={<ArrowLeft />} disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>

        <Button variant="contained" endIcon={<ArrowRight />} onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Next
        </Button>
      </Paper>
    </Box>
  )
}

export default StepperForm  