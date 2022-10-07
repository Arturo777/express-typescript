// export type Visibility = 'great' | 'good' | 'ok' | 'poor'
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// type DiaryPublicEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type DiaryPublicEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
