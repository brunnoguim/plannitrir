import styled from 'styled-components'
import { DaysList } from './DaysList'
import { Planner } from './Planner'

const Container = styled.div`
  display: grid;
  width: 100vw;
  grid-gap: 4em;
	grid-template-columns:repeat(auto-fit, minmax(400px, 414px));
  grid-auto-rows:minmax(800px, 800px);
  justify-content: center;
`

const DivText = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  color: white;
  width: 400px;
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