import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"

export default function template({ data }) {
  const post = data.markdownRemark
  const image = data.images.nodes

  return (
    <div>
      <div className="topLinks">
        <Link className="home" to="/">
          {" "}
          Go Home{" "}
        </Link>{" "}
        <hr />
        <Link className="proj" to="/projects">
          More Projects
        </Link>
      </div>
      <div className="albumPageTopSec">
        <div className="albumPageHeaderText">
          <h1> {post.frontmatter.title} </h1>
          <h4> Location: {post.frontmatter.location} </h4>
        </div>
        <div className="albumPageHeaderImage">
          {/*<Img id={image[0].id} fluid={image[0].childImageSharp.fluid} */}
        </div>
      </div>
      <div className="albumPageSec1">
        <p>{post.frontmatter.descrip1}</p>
      </div>
      <div className="albumPageSec2">
        {/*<Img id={image[1].id} fluid={image[1].childImageSharp.fluid} />*/}
      </div>
      <div className="albumPageSec3">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
      <div className="albumPageSec1">
        <p>{post.frontmatter.descrip2}</p>
      </div>
      <div className="albumPageSec4">
        <div className="box1">
          <div className="inner">
            <span>i</span>
            <p>{post.frontmatter.photoDescrip1}</p>
          </div>
        </div>
        <div className="box2"></div>
      </div>
      <div className="albumPageSec1">
        <p>{post.frontmatter.descrip3}</p>
      </div>
      <div className="albumPageSec5">
        <div className="box1"></div>
        <div className="box2">
          <p>{post.frontmatter.photoDescrip2}</p>
        </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query AlbumPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        location
        descrip1
        descrip2
        descrip3
        photoDescrip1
        photoDescrip2
      }
    }
    images: allFile(filter: { relativeDirectory: { eq: "landscapes" } }) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
