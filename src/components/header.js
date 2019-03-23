import React from "react"
import styled from "styled-components"
import Link from "../components/link"

const Header = () => (
  <header>
    <Row>
      <Column>
        <Navi>
          <List align="center">
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
      <Column>
        <Title>LIUBOADING</Title>
      </Column>
      <Column>
        <Navi>
          <List align="flex-end">
            <ListItem>
              <Link href="#">FAQ</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Information</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Contact</Link>
            </ListItem>
          </List>
        </Navi>
      </Column>
    </Row>
  </header>
)

const Row = styled.div`
  display: flex;
`

const Column = styled.div`
  width: 33.333%;
`

const Navi = styled.nav`
  text-align: center;
  height: 100%;
`
const Title = styled.h1`
  text-align: center;
`

const List = styled.ul`
  display: flex;
  height: 100%;
  align-items: ${props => props.align};
`

const ListItem = styled.li`
  width: 33%;
  list-style-type: none;
`

export default Header
