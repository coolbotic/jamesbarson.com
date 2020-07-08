import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import "./blog.css"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulBlog(
          filter: { node_locale: { eq: "en-US" } }
          sort: { order: DESC, fields: createdAt }
        ) {
          edges {
            node {
              id
              slug
              title
              shortDescription
              createdAt(formatString: "DD/MM/YYYY")
              featuredImage {
                fluid(maxWidth: 1200, quality: 85) {
                  src
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header className="blog_wrapper">
        {data.allContentfulBlog.edges.map(data => (
          <Link to={`/blog/${data.node.slug}/`} className="blogLink" key={data.node.id}>
            <div className="blogBox" key={data.node.id}>
              <div className="blogFlex">
                <h1 className="blogLables"> {data.node.title}</h1>
                <h3 className="blogLables blogDate">{data.node.createdAt}</h3>
                <h2 className="blogLables blogshortDescription">
                  {data.node.shortDescription}
                </h2>
                {/* <button className="blogButton">Read More</button> */}
              </div>
              <div className="blogImgDIV">
                <img
                  src={data.node.featuredImage.fluid.src}
                  className="blogImage"
                  alt="website covers"
                />
              </div>
            </div>
          </Link>
        ))}
      </header>
    )}
  ></StaticQuery>
)
