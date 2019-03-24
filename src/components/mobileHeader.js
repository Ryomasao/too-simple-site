import React from "react"
import styled, { css } from "styled-components"
import Link from "../components/link"

const MobileHeader = ({ className }) => (
  <Row className={className}>
    <Column width="12%">
      <HamburgerIcon>
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerIcon>
    </Column>
    <Column width="70%">
      <Title>LIUBOADING</Title>
    </Column>
    <Column width="18%">
      <Contact>
        <Link href="#">Contact</Link>
      </Contact>
    </Column>
  </Row>
)

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  width: ${({ width }) => width && width};
`

const Title = styled.h1`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #7f8085;
`

const Contact = styled.div`
  padding: 30px 0px;
  background-color: #35363d;
  text-align: center;
  a {
    color: white;
  }
`

const HamburgerIcon = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span:first-of-type {
    margin-bottom: 6px;
  }
`

const HamburgerLine = styled.span`
  display: inline-block;
  width: 24px;
  height: 3px;
  background-color: black;
`

export default MobileHeader
