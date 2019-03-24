import React from "react"
import Portal from "./portal"
import styled from "styled-components"

class SideMenu extends React.Component {
  constructor(props) {
    super(props)
    this.sideMenuRef = React.createRef()
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutSide)
    document.addEventListener("touchend", this.handleClickOutSide)
  }

  componentWillUnmount() {
    document.removeEventListener("touchend", this.handleClickOutSide)
  }

  handleClickOutSide = e => {
    // click outside
    // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    if (
      this.sideMenuRef &&
      this.sideMenuRef.current &&
      !this.sideMenuRef.current.contains(e.target)
    ) {
      this.props.onClickOutSide()
    }
  }

  render() {
    const { showSideMenu } = this.props

    return (
      <Portal>
        <Wrapper ref={this.sideMenuRef} showSideMenu={showSideMenu}>
          <List>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </List>
        </Wrapper>
      </Portal>
    )
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.8;
  width: 30%;
  height: 100vh;
  background: black;
  z-index: 1000;

  transition: transform 0.3s;
  transform: ${({ showSideMenu }) =>
    showSideMenu ? "translateX(0)" : "translateX(-100%)"};
`

const List = styled.ul`
  margin-top: 50px;
  list-style: none;
  a {
    text-decoration: none;
    color: white;
  }
`
export default SideMenu
