import React from "react"
import styled from "styled-components"

const LinkComponent = ({ href, children }) => (
  <Link href={href}>{children}</Link>
)

const Link = styled.a`
  text-decoration: none;
  color: black;
`

export default LinkComponent
