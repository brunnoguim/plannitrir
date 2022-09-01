import styled from 'styled-components'

const MainWrapper = styled("div")`
  width: 100%;
  min-height: 100vh;
  display: flex;
`

const SiteLayout = ({ children }) => (
  <MainWrapper>
    {children}
  </MainWrapper>
)

export default SiteLayout;