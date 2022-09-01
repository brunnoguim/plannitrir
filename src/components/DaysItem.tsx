import styled from 'styled-components'
import Router from 'next/router'

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: grid;
	grid-template-columns: 130px 1fr;
  cursor: pointer;
  &:hover{
    filter: contrast(107%) saturate(110%);
  }
`

const DateContainer = styled.div`
  display: flex;
	justify-content: space-evenly;
  background-color: #B700BB;
  color: white;
`

const DateBox = styled.div`
  background-color: #B700BB;
  text-align: center;
  font-weight: 700;
  line-height: 80px;
  font-size: 48px;
`

const MonthBox = styled.div`
  background-color: #B700BB;
  text-align: center;
  line-height: 80px;
  font-weight: 700;
  font-size: 24px;
`

const TitleContainer = styled.div`
  background-color: #1F2331;
  padding-left: 0.75em;
  line-height: 80px;
  font-size: 32px;
  color: white;
`

interface Props {
  day: string,
  month: string,
  title: string
}

export const DaysItem: React.FC<Props> = ({ day, month, title }) => {

  const navDay = () => {
    Router.push(`/plannit${day}${month}`)
  }

  return (
    <Wrapper onClick={navDay}>
      <DateContainer>
        <DateBox>
          {day}
        </DateBox>
        <MonthBox>
          {month}
        </MonthBox>
      </DateContainer>
      <TitleContainer>
        {title}
      </TitleContainer>
    </Wrapper>
  )
}