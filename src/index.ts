import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware to convert req.body in json format
const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server connected at port ${PORT}`)
})
