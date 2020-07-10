import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"

const BlogTemplate = props => {
  return (
    <Layout>
      <SEO
        title={props.data.contentfulBlog.seoTitle}
        description={props.data.contentfulBlog.seoDescription}
        keywords={props.data.contentfulBlog.seoKeywords}
      />
      <div className="blogTempateWrapper">
        <div className="blogTempateBox">
          
          <div className="blogHeader">
            <div
              className="blogHero"
              style={{
                backgroundImage: `url(${props.data.contentfulBlog.featuredImage.fluid.src})`,
              }}
            ></div>
            <div className="blogInfo">
              
              <div className="blogHeaderBorder">
                <h1 className="blogTempateLables blogTempateTitle">
                  {props.data.contentfulBlog.title}
                </h1>
                <h2 className="blogTempateLables blogTempateDate">
                  {props.data.contentfulBlog.createdAt}
                </h2>
              </div>
            </div>
          </div>

          <div className="blogWrapper">
            <div className="blogContent">
              <div
                dangerouslySetInnerHTML={{
                  __html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query BlogTemplate($id: String!) {
    contentfulBlog(id: { eq: $id }) {
      title
      id
      slug
      createdAt(formatString: "DD/MM/YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }

      seoTitle
      seoDescription
      seoAuthor
      seoKeywords
      seoImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
      featuredImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`
