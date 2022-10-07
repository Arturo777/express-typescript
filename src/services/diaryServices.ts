import { DiaryEntry, DiaryPublicEntry, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries

export const findEntryById = (id: number): DiaryPublicEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...rest } = entry

    return rest
  }

  return undefined
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newEntry)
  return newEntry
}

export const getPublicEntries = (): DiaryPublicEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}
