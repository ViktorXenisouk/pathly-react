import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { handleGetResult } from "../api/api"
import { Box } from "@mui/material"
import RenderResult from "../components/RenderResult"
import type { Result } from "../types/result"
import ShareButton from "../components/ShareButton"
import LoadingPage2 from "../components/LoadingPage2"
import GenerateAgainButton from "../components/GenerateAgainButton"

export default function ResultPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState<Result | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await handleGetResult(id!)
        if (result.success) {
          setData(result.result)
        }
        else {
          navigate("/")
        }
      } catch (error) {
        console.error("Error fetching result:", error)
        navigate("/")
      }
    }

    fetchData()
  }, [id])

  if (!data) {
    return (
      <LoadingPage2 />
    )
  }

  return (
    < Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: 4 }}>
      <ShareButton />
      <RenderResult result={data} />
      <GenerateAgainButton />
    </Box>
  )
}