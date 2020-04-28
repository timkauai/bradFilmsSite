import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const projectsPage = ({ data }) => (
  <div>
    <SEO title="B-RAD's Projects" />
    <div class="projectPage">
      <div class="projectLeft">
        <div class="projectsTitle">
          {" "}
          {data.allMarkdownRemark.edges.map(post => (
            <h1 key={post.node.id}> {post.node.frontmatter.projectsTitle} </h1>
          ))}{" "}
        </div>{" "}
        <div class="projectsLeftEmpty"> </div>{" "}
        <div class="projectsReturn">
          <Link className="link" to="/">
            {" "}
            {data.allMarkdownRemark.edges.map(post => (
              <p key={post.node.id}>
                {" "}
                {post.node.frontmatter.projectsReturnToHomeButton}{" "}
              </p>
            ))}{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
      <div class="projectRight">
        <Link className="landscapeLinks projectLink" to="landscapes/">
          <div class="landscapes">
            <div class="album-cover-copy">
              <h1> landscapes </h1>{" "}
              {data.allMarkdownRemark.edges.map(post => (
                <p key={post.node.id}>
                  {" "}
                  {post.node.frontmatter.landscapesCopy}{" "}
                </p>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </Link>{" "}
        <Link className="productLinks projectLink" to="products/">
          <div class="products">
            <div class="album-cover-copy">
              <h1> products </h1>{" "}
              {data.allMarkdownRemark.edges.map(post => (
                <p key={post.node.id}> {post.node.frontmatter.productsCopy} </p>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </Link>{" "}
        <Link className="productLinks projectLink" to="portraits/">
          <div class="portraits">
            <div class="album-cover-copy">
              <h1> portraits </h1>{" "}
              {data.allMarkdownRemark.edges.map(post => (
                <p key={post.node.id}>
                  {" "}
                  {post.node.frontmatter.portraitsCopy}{" "}
                </p>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </Link>{" "}
        <Link className="productLinks projectLink" to="stylistic/">
          <div class="stylistic">
            <div class="album-cover-copy">
              <h1> stylistic </h1>{" "}
              {data.allMarkdownRemark.edges.map(post => (
                <p key={post.node.id}>
                  {" "}
                  {post.node.frontmatter.stylisticCopy}{" "}
                </p>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </Link>{" "}
        <Link className="productLinks projectLink" to="theCollection/">
          <div class="theCollection">
            <div class="album-cover-copy">
              <h1> the Collection </h1>{" "}
              {data.allMarkdownRemark.edges.map(post => (
                <p key={post.node.id}>
                  {" "}
                  {post.node.frontmatter.theCollectionCopy}{" "}
                </p>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </Link>{" "}
      </div>{" "}
    </div>{" "}
  </div>
)

export const pageQuery = graphql`
  query projectsPageIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            projectsTitle
            projectsReturnToHomeButton
            landscapesCopy
            productsCopy
            portraitsCopy
            stylisticCopy
            theCollectionCopy
          }
        }
      }
    }
  }
`

export default projectsPage
