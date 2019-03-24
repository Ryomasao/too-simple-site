/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <div>
          <main>{children}</main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )}
  />
)

const HeaderWrapper = styled.div`
  margin-top: 50px;

  @media (max-width: 375px) {
    margin-top: 0;
  }
`

export default Layout
