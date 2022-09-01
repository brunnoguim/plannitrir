import styled from 'styled-components'

const Container = styled.div<RowProps>`
  width: 100%;
  height: 62px;
  position: relative;
  background-color: transparent;
`

const Line = styled.div<RowProps>`
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 1;
  border-top: ${(props) => props.isPlanner ? '1px dashed black' : '1px dashed white'};
  background-color: transparent;
`

interface RowProps {
  isPlanner: boolean;
}

const Time = styled.div<RowProps>`
  width: 50px;
  height: 50px;
  position: absolute;
  left: ${(props) => props.isPlanner ? '11px' : '0'};
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: ${(props) => props.isPlanner ? '#FFF7B2' : '#FFD9FB'};
  border: 2px solid #000000;
  display: grid;
  place-items: center;
  z-index: 5;
  font-weight: 600;
`

export const Row = ({ time, planner }) => {

  return (
    <Container isPlanner={planner} >
      <Line isPlanner={planner} />
      <Time isPlanner={planner} >
        {`${time}h`}
      </Time>
    </Container>
  )
}