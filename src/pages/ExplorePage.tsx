import React, { useState, useEffect } from 'react'
import RenderResult from '../components/RenderResult'
import { handleSubmit as api } from "./../api/api"
import { useFormStore } from '../store/useFormStore'
import { type Result } from '../types/result'
import LoadingPage from '../components/LoadingPage'
import { useNavigate } from 'react-router-dom'
import GenerateAgainButton from '../components/GenerateAgainButton'
import { Box } from '@mui/material'

const ExplorePage: React.FC = () => {
  const store = useFormStore()
  const [results, setResults] = useState<Result | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    handleSubmit()
  }, [store.answers])

  console.log(results)

  const handleSubmit = () => {
    if (!store.answers.consent) {
      navigate('/')
      return
    }
    console.log(store.answers)

    api(store.answers)
      .then((value) => {
        if (!value.success) {
          alert("An error occurred while submitting your preferences. Please try again.")
          navigate('/')
        } else {
          setResults(value.result)
        }
      })
      .catch(() => {
        alert("An error occurred while submitting your preferences. Please try again.")
        navigate('/')
      })
  }
  if (!results) {
    return (
      <LoadingPage />
    )
  }

  return (
    < Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 4 }}>
      <RenderResult result={results} />
      <GenerateAgainButton />
    </Box>
  )
}

export default ExplorePage