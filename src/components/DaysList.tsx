import styled from 'styled-components'
import { DaysItem } from './DaysItem'
import { useContext } from 'react'
import { PostitsContext } from '../contexts/PostitsContext'

const Wrapper = styled.div`
  width: 400px;
  display: grid;
	grid-template-rows: 1fr;
  grid-gap: 1em;
`

export const DaysList = () => {

  const { daysList } = useContext(PostitsContext)

  return (
    <Wrapper>
      {daysList.map((day: { day: string, month: string, weekDay: string }, index: number) => (
        <DaysItem key={index} day={day.day} month={day.month} title={day.weekDay} />
      ))}
    </Wrapper>
  )
}