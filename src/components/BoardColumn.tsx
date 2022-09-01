import styled from 'styled-components'
import { Postit } from './Postit'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PostitsContext } from '../contexts/PostitsContext'

const Column = styled.div`
  height: 100%;
  width: 115px;
  position: relative;
  background-color: transparent;
  z-index: 10;
`

interface PostitWrapperProps {
  position: string;
  onClick?: () => void;
}

const PostitWrapper = styled.div<PostitWrapperProps>`
  position: absolute;
  top: ${(props) => props.position};
  background-color: transparent;
`

interface Props {
  stage: string,
}

export const BoardColumn: React.FC<Props> = ({ stage }) => {

  const { showsList, handleSelection, selectedShows } = useContext(PostitsContext)

  const currentDay = useRouter().pathname.substring(8, 10)
  const todaysShows = showsList.filter(function (show) { return show.day === currentDay })

  const getVerticalPosition = (time: string): string => {

    const hours = parseInt(time.substring(0, 2)) === 0 ? 24 - 14.9 : parseInt(time.substring(0, 2)) - 14.9
    const minutes = parseInt(time.substring(3, 5)) / 60

    const total = hours + minutes
    const maxValue = 10

    const result = (total / maxValue * 100).toFixed(2)
    return `${result}%`
  }

  const checkActive = (id: number): boolean => {
    let result = null
    selectedShows.map(item => item.id).indexOf(id) === -1 ? result = false : result = true
    return result
  }

  return (
    <Column>
      {todaysShows.map((show: { artist: string, time: string, stage: string, day: string, month: string, weekDay: string, id: number, angle: number }) => show.stage === stage && (
        <PostitWrapper onClick={() => handleSelection(show)} key={show.id} position={getVerticalPosition(show.time)}>
          <Postit isShow={true} title={show.artist} subtitle={show.time} angle={show.angle} active={checkActive(show.id)} />
        </PostitWrapper>
      ))}
    </Column>
  )
}