import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getPublicEntries())
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const diary = diaryServices.findEntryById(+id)

  return (diary != null) ? res.json(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    // const { date, weather, visibility, comment } = req.body
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
