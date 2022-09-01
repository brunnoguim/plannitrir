import styled from 'styled-components'
import { DaysList } from './DaysList'
import { Planner } from './Planner'

const Container = styled.div`
  display: grid;
  width: 100vw;
  grid-gap: 4em;
	grid-template-columns:repeat(auto-fit, minmax(390px, 450px));
  grid-auto-rows:minmax(800px, 800px);
  padding-bottom: 1.5em;
  justify-content: center;
  overflow-x: hidden;
`

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5em;
`

const Title = styled.h1`
  color: white;
  width: 100%;
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  padding-bottom: 50px
`

const PlannerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;
  transform: rotate(-3deg);
`

export const Hero = () => {

  return (
    <Container>
      <PlannerWrapper>
        <Planner />
      </PlannerWrapper>
      <DivText>
        <Title>Selecione o dia do RiR que você quer planejar</Title>
        <DaysList />
      </DivText>
    </Container >
  )
}