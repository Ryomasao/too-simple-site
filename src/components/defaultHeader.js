import React from "react"
import styled, { css } from "styled-components"
import Link from "../components/link"

const DefaultHeader = ({ className }) => (
  <Row className={className}>
    <Column width="40%">
      <Navi>
        <List>
          <ListItem>
            <Link href="#">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="#">About</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Service</Link>
          </ListItem>
        </List>
      </Navi>
    </Column>
    <Column width="20%">
      <Title>LIUBOADING</Title>
    </Column>
    <Column width="40%">
      <Navi>
        <List>
          <ListItem>
            <Link href="#">FAQ</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Information</Link>
          </ListItem>
          <ListItem black>
            <Link href="#">Contact</Link>
          </ListItem>
        </List>
      </Navi>
    </Column>
  </Row>
)

const Row = styled.div`
  display: flex;
`

const Column = styled.div`
  width: ${({ width }) => width};
`

const Navi = styled.nav`
  text-align: center;
  height: 100%;
`
const Title = styled.h1`
  text-align: center;
  color: #7f8085;
`

const List = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
`

const ListItem = styled.li`
  width: 33%;
  list-style-type: none;
  font-size: 1.5rem;
  padding: 30px 0px;

  ${({ black }) =>
    black &&
    css`
      background-color: #35363d;
      a {
        color: white;
      }
    `}

  &:hover {
    opacity: 0.5;
  }
`

export default DefaultHeader
