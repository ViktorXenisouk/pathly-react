import {type Artist, type ArtistFilter} from './artist';
import {type Track} from './track';

export type Answers = {
  vibe?: string[],
  goals?: string[],
  artists?: (Artist | string)[],
  tracks?: Track[],
  genres?: string[],
  language?: string,
  songsCount?: number,
  email?: string,
  consent?: boolean,
  consentSave?: boolean,
  artistFilter?: ArtistFilter,
}