import { Header } from '../components/Header'
import { Planner } from '../components/Planner'
import { Board } from '../components/Board'
import { Download } from '../components/icons/Download'
import styled from 'styled-components'
import Head from 'next/head'

const Wrapper = styled.div`
  min-width: 1800px;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  height: 850px;
  overflow-x: auto;
`

const PlannerWrapper = styled.div`
  width: 432px;
  height: 768px;
  position: relative;
`

export default function Index() {

  return (
    <div>
      <Head>
        <title>Plannit 11SET - Domingo</title>
      </Head>
      <Header />
      <Container>
        <Wrapper>
          <Board />
          <PlannerWrapper>
            <Download width={'50px'} />
            <Planner />
          </PlannerWrapper>
        </Wrapper>
      </Container>
    </div>
  )
}