import React from "react"
import ReactDOM from "react-dom"

export default class Portal extends React.Component {
  state = { root: null }

  componentDidMount() {
    this.setState({ root: document.getElementById("root") })
  }

  render() {
    if (!this.state.root) return null

    return ReactDOM.createPortal(this.props.children, this.state.root)
  }
}
