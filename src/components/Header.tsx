import styled from 'styled-components'
import Router, { useRouter } from 'next/router'

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 2em 3em;
  align-items: center;
  margin-bottom: 1em;
`

const Subcontainer = styled.div`
  display: grid;
  grid-gap: 2em;
	grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`

interface HeaderTextProps {
  disabled?: boolean;
  right?: boolean;
}

const HeaderText = styled.h1<HeaderTextProps>`
  font-weight: 700;
  font-size: 24px;
  text-align: ${(props) => props.right ? 'right' : ''};
  cursor: ${(props) => props.disabled ? '' : 'pointer'};
  color: white;
  &:hover{
    text-shadow: ${(props) => props.disabled ? '' : '0px 0px 1.5px #ffffff'};
  }
`

export const Header = () => {

  const navHome = () => {
    Router.push(`/`)
  }

  const router = useRouter()

  return (
    <Container>
      <HeaderText onClick={router.pathname.startsWith('/plan') ? () => navHome() : undefined} disabled={router.pathname.startsWith('/plan') ? false : true}>Plannit RiR</HeaderText>
      {/* {router.pathname.startsWith('/plan') ? (
        <Subcontainer>
          <HeaderText right>Como usar</HeaderText>
          <HeaderText right>Sobre</HeaderText>
        </Subcontainer>
      ) : (<HeaderText right>Sobre</HeaderText>)} */}
    </Container >
  )
}