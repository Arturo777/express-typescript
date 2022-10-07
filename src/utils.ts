import { Visibility, Weather } from './enums'
import { NewDiaryEntry } from './types'

const isString = (string: any): boolean => typeof string === 'string' || string instanceof String
const isDate = (date: any): boolean => Boolean(Date.parse(date))

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parseComment = (reqComment: any): string => {
  if (!isString(reqComment)) {
    throw new Error('Incorrect or missing comment')
  }

  return reqComment
}

const parseDate = (reqDate: any): string => {
  if (!isDate(reqDate) || !isString(reqDate)) {
    throw new Error('Incorrect or missing date')
  }

  return reqDate
}

const parseWeather = (reqWeather: any): Weather => {
  if (!isString(reqWeather) || !isWeather(reqWeather)) {
    throw new Error('Incorrect or missing weather')
  }

  return reqWeather
}

const parseVisibility = (reqVisibility: any): Visibility => {
  if (!isString(reqVisibility) || !isVisibility(reqVisibility)) {
    throw new Error('Incorrect or missing visibility')
  }

  return reqVisibility
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
