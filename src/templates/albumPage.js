import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default function template({ data }) {
  const post = data.markdownRemark
  const image = data.images.nodes

  var headerInt = 0
  var panoInt = 0
  var topLeftInt = 0
  var topRightInt = 0
  var bottomInt = 0
  var leftInt = 0
  var rightInt = 0
  var sec5LeftInt = 0

  {/*for (let i = 0; i < image.length; i++) {
    if (image[i].name === post.frontmatter.headerName) {
      headerInt = i
    } else if (image[i].name === post.frontmatter.panoSecName) {
      panoInt = i
    } else if (image[i].name === post.frontmatter.sec3TopLeftName) {
      topLeftInt = i
    } else if (image[i].name === post.frontmatter.sec3TopRightName) {
      topRightInt = i
    } else if (image[i].name === post.frontmatter.sec3BottomName) {
      bottomInt = i
    } else if (image[i].name === post.frontmatter.sec4LeftName) {
      leftInt = i
    } else if (image[i].name === post.frontmatter.sec4RightName) {
      rightInt = i
    } else if (image[i].name === post.frontmatter.sec5Name) {
      sec5LeftInt = i
    }
  }*/}

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
        <h4> Location: {post.frontmatter.location} </h4>
        <div></div>
        <h1> {post.frontmatter.title} </h1>
        <div></div>
        <h5> Time Frame: {post.frontmatter.dates} </h5>
        <div></div>
    {/*<Img
          className="Img"
          fluid={image[headerInt].childImageSharp.fluid}
        />*/}
        <div></div>
      </div>
      <div className="albumPageSec1">
        <p>{post.frontmatter.descrip1}</p>
      </div>
      <div className="albumPageSec2">
    {/*<Img
          className="Img"
          fluid={image[panoInt].childImageSharp.fluid}
        />*/}
      </div>
      <div className="albumPageSec3">
        <div className="box1">
    {/*<Img
            fluid={image[topLeftInt].childImageSharp.fluid}
          />*/}
        </div>
        <div className="box2">
    {/*<Img
            fluid={image[topRightInt].childImageSharp.fluid}
          />*/}
        </div>
        <div className="box3">
    {/*<Img
            fluid={image[bottomInt].childImageSharp.fluid}
          />*/}
        </div>
      </div>
      <div className="albumPageSec1">
        <p>{post.frontmatter.descrip2}</p>
      </div>
      <div className="albumPageSec4">
        <div className="box1">
    {/*<Img
            fluid={image[leftInt].childImageSharp.fluid}
          />*/}
        </div>
        <div className="box2">
    {/*<Img
            fluid={image[rightInt].childImageSharp.fluid}
          />*/}
        </div>
      </div>
      <div className="albumPageSec1">
        <p>{post.frontmatter.descrip3}</p>
      </div>
      <div className="albumPageSec5">
        <div className="box1">
    {/*<Img
            fluid={image[sec5LeftInt].childImageSharp.fluid}
          />*/}
        </div>
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
        dates
        descrip1
        descrip2
        descrip3
        photoDescrip1
        photoDescrip2
        headerName
        panoSecName
        sec3TopLeftName
        sec3TopRightName
        sec3BottomName
        sec4LeftName
        sec4RightName
        sec5Name
      }
    }
    images: allFile(filter: { relativeDirectory: { eq: "landscapes" } }) {
      nodes {
        id
        name
        childImageSharp {
          fluid(maxWidth: 3080, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
