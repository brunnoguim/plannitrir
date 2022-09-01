import styled from 'styled-components'
import { Row } from './Row'
import { Holes } from './Holes'
import { Postit } from './Postit'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PostitsContext } from '../contexts/PostitsContext'
import { Website } from './icons/Website'
import { Set } from './icons/Set'
import { Two } from './icons/Two'
import { Three } from './icons/Three'
import { Four } from './icons/Four'
import { Eight } from './icons/Eight'
import { Nine } from './icons/Nine'
import { Ten } from './icons/Ten'
import { Eleven } from './icons/Eleven'
import { Note } from './icons/Note'

import heroShows from '../../public/heroShows.json'

const Wrapper = styled.div`
  width: 432px;
  height: 768px;
  background-color: #FAFFDD;
  position: relative;
  box-shadow: 7px 7px 8px 0px #00000080;
  display: flex;
  flex-direction: column;
  padding: 5.5em 0 0 0;
  overflow: hide;
`

const Title = styled.h1`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 45px;
  padding-left: 45px;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  background-color: transparent;
`

const RedLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: #B50000;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 16.7%;
`
const InvisContainer = styled.div`
  top: 90px;
  height: 620px;
  left: 16.7%;
  width: 83.3%;
  position: absolute;
  background-color: transparent;
  z-index: 10;
`

const InvisSubcontainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: transparent;
  z-index: 10;
`

interface PostitWrapperProps {
  positionVert: string;
  positionHoriz: string;
  onClick?: () => void;
}

const PostitWrapper = styled.div<PostitWrapperProps>`
  position: absolute;
  top: ${(props) => props.positionVert};
  left: ${(props) => props.positionHoriz};
  background-color: transparent;
`

export const Planner = () => {

  const pathname = useRouter().pathname

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

  const { selectedShows, handleSelection } = useContext(PostitsContext)
  const times = ['15', '16', '17', '18', '19', '20', '21', '22', '23', '00']
  const currentDay = useRouter().pathname.substring(8, 10)

  const getVerticalPosition = (time: string): string => {

    const hours = parseInt(time.substring(0, 2)) === 0 ? 24 - 14.9 : parseInt(time.substring(0, 2)) - 14.9
    const minutes = parseInt(time.substring(3, 5)) / 60

    const total = hours + minutes
    const maxValue = 10

    const result = (total / maxValue * 100).toFixed(2)
    return `${result}%`
  }

  return (
    <Wrapper id={'planner'}>
      <Holes />
      <Title>Meu RiR</Title>
      <Website />
      {pathname === '/' && (<Three />)}
      {currentDay === '02' && (<Two />)}
      {currentDay === '03' && (<Three />)}
      {currentDay === '04' && (<Four />)}
      {currentDay === '08' && (<Eight />)}
      {currentDay === '09' && (<Nine />)}
      {currentDay === '10' && (<Ten />)}
      {currentDay === '11' && (<Eleven />)}
      <Set />
      <RedLine />
      <Note width={'40px'} />
      {times.map((time: string, index: number) => (<Row key={index} planner={true} time={time} />))}
      <InvisContainer>
        <InvisSubcontainer>
          {pathname === '/' ?
            heroShows.map((show: dataProps) => (
              <PostitWrapper onClick={() => null} key={show.id} positionHoriz={show.horizontal} positionVert={getVerticalPosition(show.time)}>
                <Postit title={show.artist} subtitle={show.time} angle={show.angle} active isPlanner isDisabled isShow />
              </PostitWrapper>))
            :
            selectedShows.map((show: dataProps) => show.day === currentDay && (
              <PostitWrapper onClick={() => handleSelection(show)} key={show.id} positionHoriz={show.horizontal} positionVert={getVerticalPosition(show.time)}>
                <Postit title={show.artist} subtitle={show.time} angle={show.angle} active isPlanner isShow />
              </PostitWrapper>))}
        </InvisSubcontainer>
      </InvisContainer>
    </Wrapper>
  )
}