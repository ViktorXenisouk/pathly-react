import axios from "axios"
import { type Result } from "../types/result"
import { type Answers } from "../types/answers"
import { parseResult } from "../utils/parseResult"

const handleSubmit = async (answers: Answers): Promise<{ success: boolean, result: Result }> => {

  const formattedAnswers = {
    ...answers,
    artists: answers.artists?.map(artist => typeof artist === 'string' ? artist : artist.name),
    tracks: answers.tracks?.map(track => typeof track === 'string' ? track : track.name),
  }

  try {
    const res = await axios.post(
      "https://hook.eu1.make.com/5pr2fbeplcyqgfxygiuw5naev7vsljx1",
      formattedAnswers, {
      headers: {
        "Content-Type": "application/json",
      }
    },
    )

    const data = parseResult(res.data)

    console.log(res.data)

    return { success: true, result: data }
  } catch (err) {
    console.error(err)
    return {
      success: false, result: { songs: [], summary: "" }
    }
  }
}

const handleGetResult = async (id: string): Promise<{ success: boolean, result: Result }> => {
  try {
    const res = await axios.post("https://hook.eu1.make.com/359lecr6ubq2zn2m9f5mgaewxc6ip5g1", { id })

    const data = parseResult(res.data)

    console.log(res.data)

    return { success: true, result: data }
  }
  catch (err) {
    console.error(err)
    return { success: false, result: { songs: [], summary: "" } }
  }
}

export { handleSubmit, handleGetResult }