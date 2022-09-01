import styled from 'styled-components'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1em 3em;
  align-items: center;
  margin-bottom: 1em;
  background-color: transparent;
`

const IconContainer = styled.div<HeaderTextProps>`
  display: flex;
  justify-content: space-between;
  transition: 0.1s;
  height: 40px;
  cursor: ${(props) => props.disabled ? '' : 'pointer'};
  &:hover{
    filter: ${(props) => props.disabled ? '' : 'contrast(150%)'};
  }
  background-color: transparent;
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
  line-height: 40px;
  padding-left: 10px;
  font-size: 24px;
  text-align: ${(props) => props.right ? 'right' : ''};
  color: white;
  background-color: transparent;
`

export const Header = () => {

  const navHome = () => {
    Router.push(`/`)
  }

  const router = useRouter()

  return (
    <Container>
      <IconContainer onClick={router.pathname.startsWith('/plan') ? () => navHome() : undefined} disabled={router.pathname.startsWith('/plan') ? false : true}>
        <Image
          alt={'Logo plannit'}
          src={'/plannit.png'}
          height={40}
          width={40}
          priority
          style={{ backgroundColor: 'transparent' }}
        />
        <HeaderText>Plannit RiR</HeaderText>
      </IconContainer>
      {/* {router.pathname.startsWith('/plan') ? (
        <Subcontainer>
          <HeaderText right>Como usar</HeaderText>
          <HeaderText right>Sobre</HeaderText>
        </Subcontainer>
      ) : (<HeaderText right>Sobre</HeaderText>)} */}
    </Container >
  )
}