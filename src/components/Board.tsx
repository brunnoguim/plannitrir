import styled from 'styled-components'
import { Row } from './Row'
import { Postit } from './Postit'
import { BoardColumn } from './BoardColumn'
import { useContext } from 'react'
import { PostitsContext } from '../contexts/PostitsContext'

const Container = styled.div`
  min-width: 1200px;
  height: 768px;
  padding-right: 3em;
  display: grid;
`

const BoardHeader = styled.div`
  height: 80px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
`

const BoardBody = styled.div`
  position: relative;
  height: 688px;
  display: grid;
`

interface VertLineProps {
  position: string;
}

const VertLine = styled.div<VertLineProps>`
  width: 2px;
  height: 100%;
  background-color: white;
  position: absolute;
  z-index: 2;
  top: 0;
  left: ${(props) => props.position};
`

const InvisContainer = styled.div`
  height: 100%;
  margin-left: 50px;
  width: 1102px;
  position: absolute;
  display: flex;
  justify-content: space-between;
`

export const Board = () => {

  const { stagesList } = useContext(PostitsContext)
  const times = ['15', '16', '17', '18', '19', '20', '21', '22', '23', '00']

  const getVertsPositions = (index: number): string => {
    const result = (100 / stagesList.length * (index + 1)) + 2
    return `${result.toFixed(2)}%`
  }

  return (
    <Container>
      <BoardHeader>
        {stagesList.map((stage: { stage: string, angle: number }, index: number) => (<Postit isShow={false} title={stage.stage} angle={stage.angle} key={index} isDisabled />))}
      </BoardHeader>
      <BoardBody>
        {stagesList.map((stage: { stage: string, angle: number }, index: number) => index < stagesList.length - 1 && (<VertLine key={index} position={getVertsPositions(index)} />))}
        {times.map((time: string, index: number) => (<Row key={index} planner={false} time={time} />))}
        <InvisContainer>
          {stagesList.map((stage: { stage: string, angle: number }, index: number) => (<BoardColumn stage={stage.stage} key={index} />))}
        </InvisContainer>
      </BoardBody>
    </Container >
  )
}