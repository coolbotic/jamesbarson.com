import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./portfolio.css"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulPortfolio(
          filter: { node_locale: { eq: "en-US" } }
          sort: { order: DESC, fields: createdAt }
        ) {
          edges {
            node {
              id
              slug
              title
              shortDescription
              url
              featuredImage {
                fluid(maxWidth: 1200, quality: 85) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header className="portfolio_wrapper">
        {data.allContentfulPortfolio.edges.map(data => (
          <div
            className="portfolioBox"
            // style={{
            //   backgroundImage: `url(${data.node.featuredImage.fluid.src})`,
            // }}
            key={data.node.id}
          >
            <div className="portfolioFlex">
              <h1 className="portfoliLables"> {data.node.title}</h1>
              <h2 className="portfoliLables portfolioshortDescription">
                {data.node.shortDescription}
              </h2>
            </div>
            <div>
              <a
                className="portfoliLables portfolioshortDescription"
                href={data.node.url}
                target="_blank"
                rel="noreferrer"
              >
                {data.node.url}
              </a>
              <img
                src={data.node.featuredImage.fluid.src}
                className="portfolioImage"
                alt="website covers"
              />
            </div>
          </div>
        ))}
      </header>
    )}
  ></StaticQuery>
)
