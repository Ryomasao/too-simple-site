import React from "react"
import styled from "styled-components"
import DefaultHeader from "./defaultHeader"
import MobileHeader from "./mobileHeader"

const Header = () => (
  <header>
    <DefaultHeaderWrapper />
    <MobileHeaderWrapper />
  </header>
)

const DefaultHeaderWrapper = styled(DefaultHeader)`
  @media (max-width: 375px) {
    display: none;
  }
`
const MobileHeaderWrapper = styled(MobileHeader)`
  @media (min-width: 376px) {
    display: none;
  }
`

export default Header
