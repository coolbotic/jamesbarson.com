import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

import Nav from "../components/nav"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="container">
      <Nav />
      <main className="box">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
