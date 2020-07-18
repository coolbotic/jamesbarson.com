import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/404/404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <div className="econtainer">
      <div className="error">
        <h1>THANKS</h1>
        <p>I will be in contact shortly...</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage