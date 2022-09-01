import styled from 'styled-components'

const HolesHeader = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: space-around;
  background-color: #FAFFDD;
  align-items: center;
  top: 0;
`

const Hole = styled.div`
  width: 30px;
  height: 30px;
  background-color: #2E3242;
  box-shadow: 7px 7px 8px 0px #00000080 inset;
  border-radius: 50%;
  z-index: 5;
`

export const Holes = () => {

  return (
    <HolesHeader>
      <Hole />
      <Hole />
      <Hole />
      <Hole />
      <Hole />
      <Hole />
      <Hole />
      <Hole />
      <Hole />
    </HolesHeader>
  )
}