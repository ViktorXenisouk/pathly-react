import { 
  SentimentNeutral, ElectricBolt, SentimentDissatisfied, HourglassBottom, 
  Mood, LocalFlorist, AutoStories, FitnessCenter, DirectionsCar, Home, DarkMode,
  Bedtime, SportsSoccer, FlightTakeoff, Restaurant, MusicNote, EmojiObjects
} from "@mui/icons-material"

export const chunks1 = [
  { label: 'Chill', value: 'chill', icon: <SentimentNeutral /> },
  { label: 'Energetic', value: 'energetic', icon: <ElectricBolt /> },
  { label: 'Sad', value: 'sad', icon: <SentimentDissatisfied /> },
  { label: 'Focus', value: 'focus', icon: <HourglassBottom /> },
  { label: 'Party', value: 'party', icon: <Mood /> },
  { label: 'Romantic', value: 'romantic', icon: <LocalFlorist /> },
  { label: 'Relax', value: 'relax', icon: <Bedtime /> },
  { label: 'Creative', value: 'creative', icon: <EmojiObjects /> },
  { label: 'Workout', value: 'workout', icon: <FitnessCenter /> },
  { label: 'Travel', value: 'travel', icon: <FlightTakeoff /> },
  { label: 'Cooking', value: 'cooking', icon: <Restaurant /> },
  { label: 'Study', value: 'study', icon: <AutoStories /> },
]

export const chunks2 = [
  { label: 'Working / Studying', value: 'working', icon: <AutoStories /> },
  { label: 'Gym', value: 'gym', icon: <FitnessCenter /> },
  { label: 'Driving', value: 'driving', icon: <DirectionsCar /> },
  { label: 'At home', value: 'home', icon: <Home /> },
  { label: 'Night walks', value: 'night_walks', icon: <DarkMode /> },
  { label: 'Morning run', value: 'morning_run', icon: <SportsSoccer /> },
  { label: 'Relaxing at cafe', value: 'cafe', icon: <Restaurant /> },
  { label: 'Listening to music', value: 'music', icon: <MusicNote /> },
]