import styled from 'styled-components'

interface ContainerProps {
  show: boolean,
  angle?: number,
  zIndex?: number,
  active?: boolean,
  planner?: boolean,
  disabled?: boolean,
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.planner ? '130px' : '115px'};
  height: 70px;
  display: grid;
  background-color: ${(props) => props.active ? '#5CE3B1' : props.show ? '#F7FFD8' : '#d32e91'};
  color: ${(props) => props.show ? 'black' : 'white'};
  place-items: center;
  box-shadow: 5px 5px 7px #131313e3;
  transform: ${(props) => props.angle != undefined ? `rotate(${props.angle}deg)` : ''};
  z-index: ${(props) => props.zIndex != undefined ? props.zIndex : '10'};
  cursor: ${(props) => props.disabled ? '' : 'pointer'};
  &:hover{
    background-color: ${(props) => props.active && !props.disabled ? '#0dcf88' : props.show && !props.disabled ? '#f9ffa3' : ''};
  }
`

const TextBox = styled.div`
  text-align: center;
  background-color: transparent;
  width: 100%;
`

const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  background-color: transparent;
`

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  width: 100%;
  background-color: transparent;
`

interface Props {
  isShow: boolean,
  title: string,
  angle: number,
  subtitle?: string,
  zIndex?: number,
  active?: boolean,
  isPlanner?: boolean,
  isDisabled?: boolean,
}

export const Postit: React.FC<Props> = ({ isShow, title, angle, subtitle, zIndex, active, isPlanner, isDisabled }) => {

  return (
    <Container disabled={isDisabled} angle={angle} show={isShow} zIndex={zIndex} active={active} planner={isPlanner} >
      <TextBox>
        <Title>
          {title}
        </Title>
        {isShow && (<Subtitle>{subtitle}</Subtitle>)}
      </TextBox>
    </Container>
  )
}