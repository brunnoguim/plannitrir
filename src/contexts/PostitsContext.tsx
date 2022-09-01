import React, { createContext, useState, ReactNode, useEffect } from 'react'
import data from '../../public/data.json'

interface dataProps {
  artist: string,
  time: string,
  stage: string,
  day: string,
  month: string,
  weekDay: string,
  id: number,
  angle: number,
  horizontal?: string,
}

interface daysListProps {
  day: string,
  month: string,
  weekDay: string
}

interface stagesListProps {
  stage: string,
  angle: number,
}

interface PostitsProviderData {
  showsList: dataProps[];
  stagesList: stagesListProps[];
  daysList: daysListProps[];
  selectedShows: dataProps[];
  handleSelection: (show: dataProps) => void;
}

interface PostitsProviderProps {
  children: ReactNode;
}

export const PostitsContext = createContext({} as PostitsProviderData)

export function PostitsProvider({ children }: PostitsProviderProps) {

  const [selectedShows, setSelectedShows] = useState<dataProps[]>([])

  const showsList: dataProps[] = data
  const stages = [...new Set(data.map(show => show.stage))]
  const stagesList = stages.map(function (stage) {
    return {
      stage: stage,
      angle: showsList.find(show => show.stage === stage).angle,
    }
  })
  const days = [...new Set(data.map(show => show.day))]
  const daysList = days.map(function (day) {
    return {
      day: day,
      month: showsList.find(show => show.day === day).month,
      weekDay: showsList.find(show => show.day === day).weekDay
    }
  })

  const getHorizontalPosition = (): string => {

    const minValue = 0
    const maxValue = 220

    const result = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
    return `${result}px`
  }

  const handleSelection = (show: dataProps) => {
    let selectedShowsCopy = selectedShows.slice(0)
    const index = selectedShowsCopy.map(item => item.id).indexOf(show.id)
    if (index === -1) {
      show.horizontal = getHorizontalPosition()
      selectedShowsCopy.push(show)
    } else {
      selectedShowsCopy.splice(index, 1)
    }
    setSelectedShows(selectedShowsCopy)
  }

  useEffect(() => {
    const savedSelectedShow = JSON.parse(localStorage.getItem('savedSelectedShows'))
    !!savedSelectedShow && !!savedSelectedShow.length ? setSelectedShows(savedSelectedShow) : null
  }, [])

  useEffect(() => {
    selectedShows != JSON.parse(localStorage.getItem('savedSelectedShows')) && (localStorage.setItem('savedSelectedShows', JSON.stringify(selectedShows)))
  }, [selectedShows])

  return (
    <PostitsContext.Provider value={{
      showsList,
      stagesList,
      daysList,
      selectedShows,
      handleSelection,
    }} >{children}</PostitsContext.Provider>
  )
}