import axios from "axios"
import { type Artist } from "../types/artist"
import { type Track } from "../types/track"

const API_KEY = "689229ca2381ebf2a2173b43332aed99"

export const getInitialAvatar = (name: string) => {
  return `https://ui-avatars.com/api/?name=${name}`
}

export const searchArtists = async (query: string) => {
  if (!query) return []

  const res = await axios.get("https://ws.audioscrobbler.com/2.0/", {
    params: {
      method: "artist.search",
      artist: query,
      api_key: API_KEY,
      format: "json",
      limit: 10,
    },
  })

  let artists = res.data.results.artistmatches.artist as Artist[]
  artists =  Array.isArray(artists) ? artists : [artists] as Artist[]

  if (!Array.isArray(artists)) {
    artists = [artists]
  }

  console.log(artists)

  return artists
    .sort((a, b) => Number(b.listeners) - Number(a.listeners))
    .map((artist) => ({
      name: artist.name,
      mbid: artist.mbid,
      listeners: artist.listeners,
      image: getInitialAvatar(artist.name)
    }))
}

export const searchTracks = async (query: string) => {
  if (!query) return []

  const res = await axios.get("https://ws.audioscrobbler.com/2.0/", {
    params: {
      method: "track.search",
      track: query,
      api_key: API_KEY,
      format: "json",
      limit: 20,
    },
  })

  let tracks = res.data.results.trackmatches.track as Track[]

  if (!Array.isArray(tracks)) {
    tracks = [tracks]
  }

  return tracks
    .slice(0, 10)
    .map((track) => ({
      name: track.name,
      artist: track.artist,
      image: getInitialAvatar(track.artist)
        }))
}