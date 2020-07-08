import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutMe from "../components/aboutme"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutMe />
  </Layout>
)

export default AboutPage
