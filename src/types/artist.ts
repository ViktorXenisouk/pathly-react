export type Artist = {
  name: string
  mbid: string
  listeners:string
  image: any
}

export type ArtistFilter = "only" | "exclude" | "partial"